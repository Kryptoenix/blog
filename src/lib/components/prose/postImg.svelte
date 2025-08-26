<!-- postImg.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
  
    type Image = {
      h: number;
      src: string;
      w: number;
    };
  
    const sources = import.meta.glob<Image[]>(['/src/static/**/*.{jpg,jpeg,png,webp,avif}', '!/src/static/assets'], {
      eager: true,
      import: 'default',
      query: {
        format: 'avif',
        quality: '80',
        source: '',
        width: '736',
      },
    });
  
    let className: string | undefined;
    export { className as class };
    export let src: string;
    export let alt: string = src;
    export let loading: 'eager' | 'lazy' = 'lazy';
    export let decoding: 'async' | 'auto' | 'sync' = 'async';
  
    const adjustedSrc = `${base}${src}`;
    const source: Image[] | undefined = sources[`/src/static${src}`];
  
    let isModalOpen = false;
  
    function openModal() {
      isModalOpen = true;
      document.body.style.overflow = 'hidden'; // Prevent background scroll when modal is open
    }
  
    function closeModal() {
      isModalOpen = false;
      document.body.style.overflow = ''; // Restore scrolling
    }
  
    // Handle closing the modal with the Escape key
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }
  
    onMount(() => {
      window.addEventListener('keydown', handleKeydown);
      return () => window.removeEventListener('keydown', handleKeydown);
    });
  </script>
  
  <style>
    .image-wrapper {
      display: inline-block;
      position: relative;
      border-radius: 0.5rem;
      padding: 0.5rem;
      transition: box-shadow 0.3s ease;
      cursor: pointer;
    }
  
    .image-wrapper:hover {
      box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.4);
    }
  
    img {
      display: block;
      width: 100%;
      height: auto;
      border-radius: inherit;
    }
  
    /* Modal styles */
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }
  
    .modal-content {
      max-width: 90%;
      max-height: 90%;
      border-radius: 8px;
      overflow: hidden;
    }
  
    .modal img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  
    .close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      background: none;
      border: none;
      z-index: 1100;
      pointer-events: auto;
      transition: transform 0.3s ease;
    }
  
    .close-btn:hover {
      transform: scale(1.2);
    }
  
    .hidden {
      opacity: 0;
      visibility: hidden;
    }
  </style>
  
  {#if source}
    <picture>
      <source srcset={source.map(({ src, w }) => `${base}${src} ${w}w`).join(', ')} type="image/avif" />
      <button class="image-wrapper" on:click={openModal} aria-label="Open image">
        <img {alt} class={className ?? 'my-2'} {decoding} {loading} src={adjustedSrc} />
      </button>
    </picture>
  {:else}
    <button class="image-wrapper" on:click={openModal} aria-label="Open image">
      <img {alt} class={className ?? 'my-2'} {decoding} {loading} src={adjustedSrc} />
    </button>
  {/if}
  
  {#if isModalOpen}
    <div class="modal" role="dialog" aria-modal="true">
      <button class="close-btn" on:click={closeModal} aria-label="Close">&times;</button>
      <div class="modal-content">
        <img src={adjustedSrc} alt={alt} />
      </div>
    </div>
  {/if}
  