// Fungsi untuk menyimpan data ke Local Storage
function saveToLocalStorage(title, content) {
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs.push({ title, content });
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }
  
  // Fungsi untuk mendapatkan data dari Local Storage dan menampilkan di halaman
  function displayBlogs() {
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  
    blogList.innerHTML = '';
  
    blogs.forEach(blog => {
      const blogItem = document.createElement('div');
      blogItem.classList.add('blog-item');
      blogItem.innerHTML = `<h2>${blog.title}</h2><p>${blog.content}</p><button onclick="deleteBlog(this)">Hapus</button>`;
      blogList.appendChild(blogItem);
    });
  }
  
  function addBlog() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    if (title && content) {
        saveToLocalStorage(title, content);
    
        // Navigasi ke halaman baru setelah menambahkan blog
        window.location.href = 'list.html';
    } else {
      alert('Mohon isi judul dan isi blog!');
    }
  }
  
  function deleteBlog(button) {
    const blogItem = button.parentNode;
    const title = blogItem.querySelector('h2').innerText;
  
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs = blogs.filter(blog => blog.title !== title);
    localStorage.setItem('blogs', JSON.stringify(blogs));
  
    displayBlogs();
  }
  
  // Menampilkan data saat halaman dimuat
  document.addEventListener('DOMContentLoaded', displayBlogs);
  