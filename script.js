function toggleList(headerElement) {
    const nextSibling = headerElement.nextElementSibling;

    // Ensure we're toggling a <ul> element
    if (nextSibling && nextSibling.tagName === 'UL') {
      const isVisible = nextSibling.style.display === 'block';
      nextSibling.style.display = isVisible ? 'none' : 'block';
    }
  }

  // Optional: initialize all collapsible lists as hidden
  document.addEventListener('DOMContentLoaded', () => {
    const collapsibleLists = document.querySelectorAll('.collapsible-list');
    collapsibleLists.forEach(list => {
      list.style.display = 'none';
    });

    const headers = document.querySelectorAll('.list-header');
    headers.forEach(header => {
      header.style.cursor = 'pointer';
      header.addEventListener('click', () => toggleList(header));
    });
  });