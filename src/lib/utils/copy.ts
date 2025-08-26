export const copyCode = () => {
  const codeBlocks = document.querySelectorAll('pre')
  const copyIcon = 'i-mdi-clipboard-text'
  const copiedIcon = 'i-mdi-check'

  const copy = async (el: HTMLElement, btn: HTMLElement) => {
    const range = document.createRange()
    const end = el.childNodes.length
    range.setStart(el, 2)
    range.setEnd(el, end)
    const selection = window.getSelection()
    if (!selection)
      return
    selection.removeAllRanges()
    selection.addRange(range)

    await navigator.clipboard.writeText(selection.toString())

    btn.classList.replace(copyIcon, copiedIcon)
    setTimeout(() => {
      btn.classList.replace(copiedIcon, copyIcon)
    }, 1000)

    selection.removeRange(range)
  }

  codeBlocks.forEach((block: HTMLElement) => {
    // Here we overwrite or add custom classes to the <pre> element
    block.classList.add('my-custom-class') // Add custom class, or replace an existing one
    block.classList.remove('existing-class') // Optionally, remove an existing class if needed
    block.classList.toggle('highlight', true) // Optionally, toggle a class conditionally

    const copyBtn: HTMLElement = document.createElement('button')
    copyBtn.classList.add(copyIcon, 'btn', 'btn-secondary', 'btn-xs', 'absolute', 'right-2', 'top-3', 'hidden')
    block.prepend(copyBtn)

    block.addEventListener('mouseenter', () => {
      copyBtn.classList.remove('hidden')
    })
    block.addEventListener('mouseleave', () => {
      copyBtn.classList.add('hidden')
    })

    copyBtn.addEventListener('click', (e) => {
      e.preventDefault()
      copy(block, copyBtn)
    })
  })
}
