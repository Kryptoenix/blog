<script lang="ts">
  export let title: string | undefined
  export let description: string | undefined
  export let status: 'error' | 'info' | 'success' | 'warning' | undefined
</script>

<div
  class="alert flex-col shadow-inner my-4"
  class:alert-error={status === 'error'}
  class:alert-info={status === 'info'}
  class:alert-success={status === 'success'}
  class:alert-warning={status === 'warning'}
>
  <div class="mr-auto flex items-center space-x-3">
    {#if status === 'success'}
      <!-- Check circle -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-green-600">
        <path stroke-linecap="round" stroke-linejoin="round" 
              d="M9 12.75L11.25 15 15 9.75m-3-6.75a9 9 0 110 18 9 9 0 010-18z" />
      </svg>
    {:else if status === 'warning'}
      <!-- Exclamation circle -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-yellow-500">
        <path stroke-linecap="round" stroke-linejoin="round" 
              d="M12 9v3.75m0 3.75h.008v.008H12v-.008zm0 0a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
    {:else if status === 'error'}
      <!-- X circle -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-red-600">
        <path stroke-linecap="round" stroke-linejoin="round" 
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5m9.75-2.25a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    {:else}
      <!-- Information circle -->
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
           stroke-width="1.5" stroke="currentColor" class="w-24 h-24 text-black-500">
        <path stroke-linecap="round" stroke-linejoin="round" 
              d="M11.25 9h.008v.008H11.25V9zm.75 4.5v3.75m0-12a9 9 0 100 18 9 9 0 000-18z" />
      </svg>
    {/if}

    <div>
      <div style="font-size: 20px;" class:font-bold={description}>{title}</div>
      {#if description}
        <div style="font-size: 16px;" class="text-xs">{description}</div>
      {/if}
    </div>
  </div>

  {#if $$slots.default}
    <div class="block w-full">
      <slot />
    </div>
  {/if}
</div>
