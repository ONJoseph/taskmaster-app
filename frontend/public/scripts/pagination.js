export function initializePagination(tasks) {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(tasks.length / 10);
    pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => {
      return `<button class="page-button" onclick="goToPage(${i + 1})">${i + 1}</button>`;
    }).join('');
  }
  
  function goToPage(page) {
    // Handle the page navigation logic
    console.log(`Navigating to page ${page}`);
  }
  