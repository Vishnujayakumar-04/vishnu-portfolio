/* ---------- Global State (Using LocalStorage) ---------- */
const state = {
  currentUser: null,
  cart: []
};

function currency(n){ return Number(n).toLocaleString('en-IN'); }

/* ---------- LocalStorage Helper Functions ---------- */
function initLocalStorage() {
  // Initialize books if not exists
  if (!localStorage.getItem('bookstore_books')) {
    const books = [
      // MANAGEMENT Books
      { id: 1, department: 'MANAGEMENT', title: 'Principles of Management', author: 'Harold Koontz', publisher: 'McGraw-Hill', price: 850, cover: 'MANAGEMENT Book/9789356224049L.jpg' },
      { id: 2, department: 'MANAGEMENT', title: 'Human Resource Management', author: 'Gary Dessler', publisher: 'Pearson', price: 920, cover: 'MANAGEMENT Book/images (1).jpeg' },
      { id: 3, department: 'MANAGEMENT', title: 'Marketing Management', author: 'Philip Kotler', publisher: 'Prentice Hall', price: 780, cover: 'MANAGEMENT Book/images (2).jpeg' },
      { id: 4, department: 'MANAGEMENT', title: 'Financial Management', author: 'I.M. Pandey', publisher: 'Vikas Publishing', price: 650, cover: 'MANAGEMENT Book/images (3).jpeg' },
      { id: 5, department: 'MANAGEMENT', title: 'Operations Management', author: 'Jay Heizer', publisher: 'Pearson', price: 890, cover: 'MANAGEMENT Book/images.jpeg' },
      
      // MATHEMATICAL SCIENCES Books
      { id: 6, department: 'MATHEMATICAL SCIENCES', title: 'Calculus: Early Transcendentals', author: 'James Stewart', publisher: 'Cengage Learning', price: 950, cover: 'MATHEMATICAL SCIENCES Book/UGS_CSIR_NETSET_MATHEMATICAL_SCIECES1715918975774.jpg' },
      { id: 7, department: 'MATHEMATICAL SCIENCES', title: 'Linear Algebra and Its Applications', author: 'Gilbert Strang', publisher: 'Brooks Cole', price: 820, cover: 'MATHEMATICAL SCIENCES Book/ifas-csir-net-mathematical-science-mathematics-theory-books-7-books-complete-study-materials-exam-books-for-csir-net-gate-set-nbhm-product-images-orvm9vhwasl-p60791.webp' },
      { id: 8, department: 'MATHEMATICAL SCIENCES', title: 'Probability and Statistics', author: 'Morris H. DeGroot', publisher: 'Pearson', price: 780, cover: 'MATHEMATICAL SCIENCES Book/images (1).jpeg' },
      { id: 9, department: 'MATHEMATICAL SCIENCES', title: 'Differential Equations', author: 'Dennis G. Zill', publisher: 'Jones & Bartlett', price: 720, cover: 'MATHEMATICAL SCIENCES Book/images (2).jpeg' },
      { id: 10, department: 'MATHEMATICAL SCIENCES', title: 'Numerical Analysis', author: 'Richard L. Burden', publisher: 'Cengage Learning', price: 890, cover: 'MATHEMATICAL SCIENCES Book/images (3).jpeg' },
      
      // ENGINEERING & TECHNOLOGY Books
      { id: 11, department: 'ENGINEERING & TECHNOLOGY', title: 'Python Programming', author: 'Mark Lutz', publisher: 'O\'Reilly Media', price: 950, cover: 'ENGINEERING & TECHNOLOGY/Python Book.jpg' },
      { id: 12, department: 'ENGINEERING & TECHNOLOGY', title: 'Java: The Complete Reference', author: 'Herbert Schildt', publisher: 'McGraw-Hill', price: 880, cover: 'ENGINEERING & TECHNOLOGY/Java Book.jpg' },
      { id: 13, department: 'ENGINEERING & TECHNOLOGY', title: 'C++ Programming Language', author: 'Bjarne Stroustrup', publisher: 'Addison-Wesley', price: 920, cover: 'ENGINEERING & TECHNOLOGY/C++ Book.jpeg' },
      { id: 14, department: 'ENGINEERING & TECHNOLOGY', title: 'Data Structures and Algorithms', author: 'Robert Sedgewick', publisher: 'Addison-Wesley', price: 850, cover: 'ENGINEERING & TECHNOLOGY/Data Structure Book.jpg' },
      { id: 15, department: 'ENGINEERING & TECHNOLOGY', title: 'Computer Networks', author: 'Andrew S. Tanenbaum', publisher: 'Prentice Hall', price: 780, cover: 'ENGINEERING & TECHNOLOGY/Computer networks.jpg' },
      
      // PHYSICAL, CHEMICAL & APPLIED SCIENCES Books
      { id: 16, department: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES', title: 'Physics for Scientists and Engineers', author: 'Raymond A. Serway', publisher: 'Brooks Cole', price: 950, cover: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES Book/81Pv+dEzF4L.jpg' },
      { id: 17, department: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES', title: 'Chemistry: The Central Science', author: 'Theodore L. Brown', publisher: 'Prentice Hall', price: 880, cover: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES Book/Engg Chem C and D.jpeg' },
      { id: 18, department: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES', title: 'Quantum Mechanics', author: 'David J. Griffiths', publisher: 'Pearson', price: 920, cover: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES Book/71F231-YUML._UF1000,1000_QL80_.jpg' },
      { id: 19, department: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES', title: 'Thermodynamics', author: 'Yunus A. Çengel', publisher: 'McGraw-Hill', price: 850, cover: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES Book/front_img_cover.jpg' },
      { id: 20, department: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES', title: 'Organic Chemistry', author: 'John McMurry', publisher: 'Brooks Cole', price: 780, cover: 'PHYSICAL, CHEMICAL & APPLIED SCIENCES Book/9780429098758.jpg' },
      
      // LIFE SCIENCES Books
      { id: 21, department: 'LIFE SCIENCES', title: 'Biology: Concepts and Connections', author: 'Neil A. Campbell', publisher: 'Benjamin Cummings', price: 950, cover: 'LIFE SCIENCES Book/9788189301040-1.jpg' },
      { id: 22, department: 'LIFE SCIENCES', title: 'Microbiology: An Introduction', author: 'Gerard J. Tortora', publisher: 'Benjamin Cummings', price: 880, cover: 'LIFE SCIENCES Book/51uASWHjAZL._SX420_BO1204203200_.jpg' },
      { id: 23, department: 'LIFE SCIENCES', title: 'Genetics: Analysis and Principles', author: 'Robert J. Brooker', publisher: 'McGraw-Hill', price: 920, cover: 'LIFE SCIENCES Book/LifeScience_EnvironmentXTBCoverfor2024Front.webp' },
      { id: 24, department: 'LIFE SCIENCES', title: 'Biochemistry', author: 'Jeremy M. Berg', publisher: 'W.H. Freeman', price: 850, cover: 'LIFE SCIENCES Book/images (1).jpeg' },
      { id: 25, department: 'LIFE SCIENCES', title: 'Ecology: Concepts and Applications', author: 'Manuel C. Molles', publisher: 'McGraw-Hill', price: 780, cover: 'LIFE SCIENCES Book/images (2).jpeg' },
      
      // HUMANITIES Books
      { id: 26, department: 'HUMANITIES', title: 'Philosophy: The Classics', author: 'Nigel Warburton', publisher: 'Routledge', price: 750, cover: 'HUMANITIES Book/51C7fJ1DkLL._UF1000,1000_QL80_.jpg' },
      { id: 27, department: 'HUMANITIES', title: 'Literature: An Introduction', author: 'Robert DiYanni', publisher: 'McGraw-Hill', price: 820, cover: 'HUMANITIES Book/humanities.jpg' },
      { id: 28, department: 'HUMANITIES', title: 'World History', author: 'William J. Duiker', publisher: 'Cengage Learning', price: 880, cover: 'HUMANITIES Book/images (1).jpeg' },
      { id: 29, department: 'HUMANITIES', title: 'Political Science', author: 'Michael G. Roskin', publisher: 'Pearson', price: 720, cover: 'HUMANITIES Book/images (2).jpeg' },
      { id: 30, department: 'HUMANITIES', title: 'Sociology: A Brief Introduction', author: 'Richard T. Schaefer', publisher: 'McGraw-Hill', price: 680, cover: 'HUMANITIES Book/images (3).jpeg' }
    ];
    localStorage.setItem('bookstore_books', JSON.stringify(books));
  }
  
  // Initialize users if not exists
  if (!localStorage.getItem('bookstore_users')) {
    localStorage.setItem('bookstore_users', JSON.stringify([]));
  }
  
  // Initialize carts if not exists
  if (!localStorage.getItem('bookstore_carts')) {
    localStorage.setItem('bookstore_carts', JSON.stringify([]));
  }
  
  // Initialize invoices if not exists
  if (!localStorage.getItem('bookstore_invoices')) {
    localStorage.setItem('bookstore_invoices', JSON.stringify([]));
  }
  
  // Initialize cart counter if not exists
  if (!localStorage.getItem('bookstore_cart_counter')) {
    localStorage.setItem('bookstore_cart_counter', '0');
  }
}

// Get next cart ID
function getNextCartId() {
  let counter = parseInt(localStorage.getItem('bookstore_cart_counter') || '0');
  counter++;
  localStorage.setItem('bookstore_cart_counter', counter.toString());
  return counter;
}

// Simple password hashing (for demo purposes)
function hashPassword(password) {
  // Simple hash - in production, use proper hashing
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    const char = password.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return hash.toString();
}

function checkSession() {
  const currentUser = JSON.parse(localStorage.getItem('bookstore_current_user') || 'null');
  if (currentUser) {
    state.currentUser = currentUser;
    updateUserMenu();
    return true;
  }
  return false;
}

function updateUserMenu() {
  const authNav = document.getElementById('auth-nav');
  const userMenu = document.getElementById('user-menu');
  const userInitial = document.getElementById('user-initial');
  const userNameDisplay = document.getElementById('user-name-display');
  const userEmailDisplay = document.getElementById('user-email-display');
  
  if (state.currentUser) {
    // Hide login/register links
    if (authNav) authNav.style.display = 'none';
    // Show user menu
    if (userMenu) userMenu.style.display = 'block';
    // Set user initial
    if (userInitial && state.currentUser.username) {
      userInitial.textContent = state.currentUser.username.charAt(0).toUpperCase();
    }
    // Set user name
    if (userNameDisplay) {
      userNameDisplay.textContent = state.currentUser.name || state.currentUser.username;
    }
    // Set user email
    if (userEmailDisplay) {
      userEmailDisplay.textContent = state.currentUser.email || '';
    }
  } else {
    // Show login/register links
    if (authNav) authNav.style.display = 'flex';
    // Hide user menu
    if (userMenu) userMenu.style.display = 'none';
  }
}

function toggleUserMenu() {
  const userMenu = document.getElementById('user-menu');
  if (userMenu) {
    userMenu.classList.toggle('active');
  }
}

function closeUserMenu() {
  const userMenu = document.getElementById('user-menu');
  if (userMenu) {
    userMenu.classList.remove('active');
  }
}

function logout() {
  localStorage.removeItem('bookstore_current_user');
  state.currentUser = null;
  state.cart = [];
  updateUserMenu();
  closeUserMenu();
  showNotification('Logged out successfully!', 'success');
  showSection('home');
  syncCartBadge();
  loadCart();
}

/* ---------- Navigation ---------- */
const sections = document.querySelectorAll('.section');
function showSection(id){
  // If not logged in and trying to access protected pages, redirect to login
  // Allow access to: home, catalogue, login, track without login
  const publicPages = ['home', 'catalogue', 'login', 'track'];
  if (!state.currentUser && !publicPages.includes(id)) {
    showNotification('Please login first!', 'error');
    id = 'login';
  }
  
  sections.forEach(s=>{
    s.classList.remove('active');
    // Reset animation
    s.style.animation = 'none';
    setTimeout(() => {
      s.style.animation = '';
    }, 10);
  });
  
  const el = document.getElementById(id);
  if(el){ 
    el.classList.add('active');
    // Trigger fade-in animation
    setTimeout(() => {
      el.style.animation = 'fadeInUp 0.6s ease-out';
    }, 50);
  }
  
  document.querySelectorAll('nav.main-nav a').forEach(a=>{
    a.classList.toggle('active', a.dataset.nav===id);
  });
  history.replaceState({}, '', '#'+id);
}

document.getElementById('top-nav').addEventListener('click', e=>{
  const link = e.target.closest('a[data-nav]');
  if(!link) return;
  e.preventDefault();
  showSection(link.dataset.nav);
});
document.querySelectorAll('[data-goto]').forEach(btn=>{
  btn.addEventListener('click', ()=>showSection(btn.dataset.goto));
});

/* ---------- Sidebar: Category and Search ---------- */
document.getElementById('catList').addEventListener('click', e=>{
  const a = e.target.closest('a[data-filter]');
  if(!a) return;
  e.preventDefault();
  document.querySelectorAll('#catList a').forEach(x=>x.classList.remove('category-active'));
  a.classList.add('category-active');

  const val = a.dataset.filter;
  const sel = document.getElementById('dept-filter');
  sel.value = val;

  filterByDepartment(val);
  showSection('catalogue');
});

document.getElementById('searchBtn').addEventListener('click', ()=>{
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  showSection('catalogue');
  document.querySelectorAll('.department-section').forEach(sec=>{
    let anyVisibleRow = false;
    sec.style.display = 'block';
    sec.querySelectorAll('table tr').forEach((tr,i)=>{
      if(i===0){ tr.style.display = ''; return; }
      const title = tr.children[1].innerText.toLowerCase();
      const author = tr.children[2].innerText.toLowerCase();
      const match = title.includes(q) || author.includes(q) || q==='';
      tr.style.display = match ? '' : 'none';
      if(match) anyVisibleRow = true;
    });
    sec.style.display = anyVisibleRow ? 'block' : 'none';
  });
});

/* ---------- Catalogue filter (select) ---------- */
function filterByDepartment(dept){
  document.querySelectorAll('.department-section').forEach(sec=>{
    const match = (dept==='all') || (sec.dataset.department===dept);
    sec.style.display = match ? 'block' : 'none';
  });
}
document.getElementById('dept-filter').addEventListener('change', e=>{
  filterByDepartment(e.target.value);
});

/* ---------- Load Books from LocalStorage ---------- */
function loadBooksFromDB() {
  const books = JSON.parse(localStorage.getItem('bookstore_books') || '[]');
  
  // Group books by department
  const booksByDept = {};
  books.forEach(book => {
    if (!booksByDept[book.department]) {
      booksByDept[book.department] = [];
    }
    booksByDept[book.department].push(book);
  });

  // Update catalogue sections dynamically
  Object.keys(booksByDept).forEach(dept => {
    const section = document.querySelector(`.department-section[data-department="${dept}"]`);
    if (section) {
      const table = section.querySelector('table');
      if (table) {
        // Clear existing rows except header
        const header = table.querySelector('tr');
        table.innerHTML = '';
        if (header) table.appendChild(header);

        // Add book rows
        booksByDept[dept].forEach(book => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><img src="${book.cover}" alt="${book.title}" class="book-cover"></td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.publisher || ''}</td>
            <td>₹${book.price}</td>
            <td><button class="btn add-to-cart" data-book-id="${book.id}" data-book="${book.title}" data-author="${book.author}" data-price="${book.price}" data-dept="${book.department}">Add to Cart</button></td>
          `;
          table.appendChild(row);
        });

        // Re-attach event listeners
        attachCartListeners();
      }
    }
  });
}

/* ---------- Cart Functions (Using LocalStorage) ---------- */
function syncCartBadge(){
  if (!state.currentUser) {
    document.getElementById('nav-cart-count').innerText = '0';
    return;
  }
  const carts = JSON.parse(localStorage.getItem('bookstore_carts') || '[]');
  const userCarts = carts.filter(c => c.user_id === state.currentUser.id);
  const count = userCarts.reduce((s, i) => s + i.qty, 0);
  document.getElementById('nav-cart-count').innerText = count;
}

function showNotification(msg, type='success'){
  const n = document.createElement('div');
  n.textContent = msg;
  n.style.cssText = `
    position: fixed; top: 16px; right: 16px; z-index: 9999;
    background: ${type==='success'?'#2e7d32':'#c62828'};
    color: #fff; padding: 10px 14px; border-radius: 10px; box-shadow: 0 8px 18px rgba(0,0,0,.2);
  `;
  document.body.appendChild(n);
  setTimeout(()=>n.remove(),2000);
}

function addToCart(bookId, name, author, price){
  if (!state.currentUser) {
    showNotification('Please login first!', 'error');
    showSection('login');
    return;
  }

  const carts = JSON.parse(localStorage.getItem('bookstore_carts') || '[]');
  const existingItem = carts.find(c => c.user_id === state.currentUser.id && c.book_id === parseInt(bookId));
  
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    carts.push({
      id: getNextCartId(),
      user_id: state.currentUser.id,
      book_id: parseInt(bookId),
      qty: 1
    });
  }
  
  localStorage.setItem('bookstore_carts', JSON.stringify(carts));
  showNotification(`${name} added to cart!`);
  loadCart();
  syncCartBadge();
}

function removeFromCart(cartId){
  const carts = JSON.parse(localStorage.getItem('bookstore_carts') || '[]');
  const filtered = carts.filter(c => c.id !== parseInt(cartId));
  localStorage.setItem('bookstore_carts', JSON.stringify(filtered));
  showNotification('Item removed from cart!');
  loadCart();
  syncCartBadge();
}

function updateQty(cartId, delta){
  const carts = JSON.parse(localStorage.getItem('bookstore_carts') || '[]');
  const item = carts.find(c => c.id === parseInt(cartId));
  if (!item) return;
  
  const newQty = Math.max(1, item.qty + delta);
  item.qty = newQty;
  localStorage.setItem('bookstore_carts', JSON.stringify(carts));
  loadCart();
  syncCartBadge();
}

function clearCart(){
  const carts = JSON.parse(localStorage.getItem('bookstore_carts') || '[]');
  const filtered = carts.filter(c => c.user_id !== state.currentUser.id);
  localStorage.setItem('bookstore_carts', JSON.stringify(filtered));
  showNotification('Cart cleared!', 'success');
  loadCart();
  syncCartBadge();
}

function loadCart(){
  if (!state.currentUser) {
    const holder = document.getElementById('cart-items');
    const summary = document.getElementById('cart-summary');
    holder.innerHTML = `<p class="muted">Please login to view your cart.</p>`;
    summary.style.display = 'none';
    return;
  }

  const carts = JSON.parse(localStorage.getItem('bookstore_carts') || '[]');
  const books = JSON.parse(localStorage.getItem('bookstore_books') || '[]');
  const userCarts = carts.filter(c => c.user_id === state.currentUser.id);
  
  if (userCarts.length === 0) {
    const holder = document.getElementById('cart-items');
    const summary = document.getElementById('cart-summary');
    holder.innerHTML = `<p class="muted">Your cart is empty. Add some books from the catalogue!</p>`;
    summary.style.display = 'none';
    state.cart = [];
    return;
  }

  // Map cart items with book details
  const items = userCarts.map(cart => {
    const book = books.find(b => b.id === cart.book_id);
    return {
      cart_id: cart.id,
      name: book ? book.title : 'Unknown',
      author: book ? book.author : '',
      price: book ? book.price : 0,
      qty: cart.qty
    };
  });

  state.cart = items;
  const holder = document.getElementById('cart-items');
  const summary = document.getElementById('cart-summary');
  
  holder.innerHTML = items.map((item, i)=>`
    <div class="cart-item" style="animation-delay: ${i * 0.1}s">
      <div><strong>${item.name}</strong><div class="muted">by ${item.author}</div></div>
      <div>₹${currency(item.price)}</div>
      <div class="qty-controls">
        <button class="btn ghost" data-qty="-1" data-cart-id="${item.cart_id}">−</button>
        <strong>${item.qty}</strong>
        <button class="btn ghost" data-qty="1" data-cart-id="${item.cart_id}">+</button>
      </div>
      <div>
        <button class="btn danger" data-remove="${item.cart_id}">Remove</button>
      </div>
    </div>
  `).join('');

  const totalItems = items.reduce((s,i)=>s+i.qty,0);
  const totalPrice = items.reduce((s,i)=>s+i.qty*i.price,0);
  document.getElementById('cart-count').innerText = totalItems;
  document.getElementById('cart-total').innerText = currency(totalPrice);
  summary.style.display = 'block';

  holder.querySelectorAll('[data-qty]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      updateQty(parseInt(btn.dataset.cartId), parseInt(btn.dataset.qty));
    });
  });
  holder.querySelectorAll('[data-remove]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      removeFromCart(parseInt(btn.dataset.remove));
    });
  });
}

function attachCartListeners() {
  document.querySelectorAll('.add-to-cart').forEach(btn=>{
    // Remove existing listeners to avoid duplicates
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener('click', ()=>{
      const bookId = newBtn.dataset.bookId;
      const bookName = newBtn.dataset.book;
      const author = newBtn.dataset.author;
      const price = newBtn.dataset.price;
      addToCart(bookId, bookName, author, price);
    });
  });
}

document.getElementById('clear-cart-btn').addEventListener('click', clearCart);
document.getElementById('checkout-btn').addEventListener('click', ()=>{
  if (!state.currentUser) {
    alert('Please login first!');
    showSection('login');
    return;
  }
  if (state.cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  preparePayment();
  showSection('payment');
});

/* ---------- Login & Registration (Using LocalStorage) ---------- */
// Tab switching functionality
function switchAuthTab(tabName) {
  // Update tabs
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  document.querySelectorAll('.auth-form').forEach(form => {
    form.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(`tab-${tabName}`).classList.add('active');
  document.getElementById(`${tabName}-form`).classList.add('active');
  
  // Clear messages
  showMsg('loginError',''); showMsg('loginSuccess','');
  showMsg('regError',''); showMsg('regSuccess','');
}

// Tab click handlers - will be initialized in DOMContentLoaded
function initAuthTabs() {
  const tabLogin = document.getElementById('tab-login');
  const tabRegister = document.getElementById('tab-register');
  
  if (tabLogin) {
    tabLogin.addEventListener('click', () => switchAuthTab('login'));
  }
  if (tabRegister) {
    tabRegister.addEventListener('click', () => switchAuthTab('register'));
  }
}

function showMsg(id, text='', kind='error'){
  const box = document.getElementById(id);
  if(!box) return;
  box.style.display = text ? 'block' : 'none';
  box.textContent = text;
  if(kind==='error'){ box.className='error'; }
  if(kind==='success'){ box.className='success-box'; }
}

function validateEmail(email){
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById('loginReset').addEventListener('click', ()=>{
  document.getElementById('login-username').value='';
  document.getElementById('login-password').value='';
  showMsg('loginError',''); showMsg('loginSuccess','');
});

document.getElementById('loginSubmit').addEventListener('click', ()=>{
  const u = document.getElementById('login-username').value.trim();
  const p = document.getElementById('login-password').value;
  showMsg('loginError',''); showMsg('loginSuccess','');
  
  if(!u || !p){ 
    return showMsg('loginError','Please enter username/email and password.'); 
  }

  const users = JSON.parse(localStorage.getItem('bookstore_users') || '[]');
  const user = users.find(usr => (usr.username === u || usr.email === u));
  
  if (!user) {
    return showMsg('loginError', 'User not found.');
  }
  
  // Simple password check (using hash)
  if (user.password !== hashPassword(p)) {
    return showMsg('loginError', 'Incorrect password.');
  }

  state.currentUser = {
    id: user.id,
    username: user.username,
    email: user.email || '',
    name: user.name || user.username
  };
  
  localStorage.setItem('bookstore_current_user', JSON.stringify(state.currentUser));
  updateUserMenu();
  showMsg('loginSuccess','Login successful!', 'success');
  loadCart();
  syncCartBadge();
  setTimeout(()=>{ showSection('catalogue'); }, 600);
});

document.getElementById('regReset').addEventListener('click', ()=>{
  ['reg-name','reg-email','reg-username','reg-password','reg-confirm','reg-phone','reg-sex','reg-dob'].forEach(id=>
    document.getElementById(id).value=''
  );
  showMsg('regError',''); showMsg('regSuccess','');
});

document.getElementById('regSubmit').addEventListener('click', ()=>{
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const username = document.getElementById('reg-username').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;
  const phone = document.getElementById('reg-phone').value.trim();
  const sex = document.getElementById('reg-sex').value;
  const dob = document.getElementById('reg-dob').value;

  showMsg('regError',''); showMsg('regSuccess','');

  if(!name || !email || !username || !password || !confirm || !phone || !sex || !dob)
    return showMsg('regError','All fields are required.');
  if(!validateEmail(email))
    return showMsg('regError','Enter a valid email address.');
  if(password.length<6)
    return showMsg('regError','Password must be at least 6 characters.');
  if(password!==confirm)
    return showMsg('regError','Passwords do not match.');
  if(!/^[0-9]{10}$/.test(phone))
    return showMsg('regError','Enter a valid 10-digit phone number.');

  const users = JSON.parse(localStorage.getItem('bookstore_users') || '[]');
  
  // Check if username or email already exists
  if (users.find(u => u.username === username || u.email === email)) {
    return showMsg('regError', 'Username or email already exists.');
  }

  // Create new user
  const newUser = {
    id: Date.now(), // Simple ID generation
    name: name,
    email: email,
    username: username,
    password: hashPassword(password), // Store hashed password
    phone: phone,
    sex: sex,
    date_of_birth: dob,
    created_at: new Date().toISOString()
  };

  users.push(newUser);
  localStorage.setItem('bookstore_users', JSON.stringify(users));

  showMsg('regSuccess','Registration successful! You can login now.', 'success');
  setTimeout(()=>{
    switchAuthTab('login');
  }, 700);
});

/* ---------- Payment ---------- */
function preparePayment(){
  const totalItems = state.cart.reduce((s,i)=>s+i.qty,0);
  const subtotal = state.cart.reduce((s,i)=>s+i.qty*i.price,0);
  const gst = Math.round(subtotal*0.05);
  const grand = subtotal + gst;
  document.getElementById('pay-summary').innerHTML = `
    <div class="line"><span>Items</span><strong>${totalItems}</strong></div>
    <div class="line"><span>Subtotal</span><strong>₹${currency(subtotal)}</strong></div>
    <div class="line"><span>GST (5%)</span><strong>₹${currency(gst)}</strong></div>
    <hr/>
    <div class="line"><span>Total</span><strong>₹${currency(grand)}</strong></div>
  `;
  renderPayFields();
}

function renderPayFields(){
  const method = document.getElementById('pay-method').value;
  const box = document.getElementById('pay-details');
  if(method==='Cash on Delivery'){
    box.innerHTML = `
      <div style="padding: 16px; background: rgba(16,185,129,0.1); border-radius: 8px; border: 2px solid #10b981;">
        <p style="margin: 0; color: #065f46;"><strong>💰 Cash on Delivery</strong></p>
        <p style="margin: 8px 0 0 0; color: #047857; font-size: 14px;">Pay cash when your order is delivered. No payment required now.</p>
      </div>
    `;
  } else if(method==='Online UPI'){
    box.innerHTML = `
      <div class="pay-row"><label>UPI ID</label><input id="upi-id" placeholder="e.g. user@upi"/></div>
      <div class="pay-row"><label>Transaction ID</label><input id="txn-id" placeholder="Enter UTR / Ref ID"/></div>
    `;
  } else {
    box.innerHTML = `
      <div class="pay-row"><label>Card Number</label><input id="card-no" placeholder="XXXX XXXX XXXX XXXX" maxlength="19"/></div>
      <div class="pay-row"><label>Card Holder Name</label><input id="card-name" placeholder="as on card"/></div>
      <div class="pay-row"><label>Expiry Date</label><input id="card-expiry" placeholder="MM/YY" maxlength="5"/></div>
      <div class="pay-row"><label>CVV</label><input id="card-cvv" type="password" placeholder="CVV" maxlength="3"/></div>
    `;
  }
}
document.getElementById('pay-method').addEventListener('change', renderPayFields);

document.getElementById('place-order').addEventListener('click', ()=>{
  if(!state.currentUser) {
    alert('Please login first!');
    showSection('login');
    return;
  }

  if(state.cart.length===0){ 
    return alert('Cart empty'); 
  }

  // Validate address
  const address = (document.getElementById('delivery-address').value||'').trim();
  const phone = (document.getElementById('delivery-phone').value||'').trim();
  
  if(!address) return alert('Please enter delivery address.');
  if(!phone || !/^[0-9]{10}$/.test(phone)) return alert('Please enter a valid 10-digit phone number.');

  const method = document.getElementById('pay-method').value;
  const total = state.cart.reduce((s,i)=>s+i.qty*i.price,0);
  const gst = Math.round(total*0.05);
  const grand = total + gst;

  // Validate payment details
  let paymentDetails = {};
  if(method==='Cash on Delivery'){
    // No payment details needed for COD
    paymentDetails = { method: 'Cash on Delivery', note: 'Payment will be collected on delivery' };
  } else if(method==='Online UPI'){
    const upi = (document.getElementById('upi-id').value||'').trim();
    const txn = (document.getElementById('txn-id').value||'').trim();
    if(!upi || !txn) return alert('Please enter UPI ID and Transaction ID.');
    paymentDetails = { upi_id: upi, txn_id: txn };
  } else {
    const card = (document.getElementById('card-no').value||'').replace(/\s+/g,'');
    const name = (document.getElementById('card-name').value||'').trim();
    const expiry = (document.getElementById('card-expiry').value||'').trim();
    const cvv = (document.getElementById('card-cvv').value||'').trim();
    if(card.length<12 || !name || !expiry || !cvv) return alert('Please enter all card details.');
    paymentDetails = { card_no: card, card_name: name, expiry: expiry, cvv: cvv };
  }

  // Create order
  const books = JSON.parse(localStorage.getItem('bookstore_books') || '[]');
  const orderItems = state.cart.map(item => {
    const book = books.find(b => b.title === item.name && b.author === item.author);
    return {
      id: book ? book.id : 0,
      title: item.name,
      author: item.author,
      price: item.price,
      qty: item.qty
    };
  });

  const orderId = 'ORD' + Date.now();
  const order = {
    id: orderId,
    date: new Date().toISOString(),
    user_id: state.currentUser.id,
    username: state.currentUser.username,
    address: address,
    phone: phone,
    method: method,
    items: orderItems,
    totals: {
      subtotal: total,
      gst: gst,
      grand: grand
    },
    payment_details: paymentDetails,
    status: 'Confirmed',
    tracking: [
      { status: 'Order Confirmed', date: new Date().toISOString(), description: 'Your order has been confirmed and is being processed.' }
    ]
  };

  // Save order (using invoices key for compatibility, but it's actually orders now)
  const orders = JSON.parse(localStorage.getItem('bookstore_invoices') || '[]');
  orders.push(order);
  localStorage.setItem('bookstore_invoices', JSON.stringify(orders));

  // Clear cart
  clearCart();

  // Display order confirmation
  const rows = order.items.map((it,i)=>`
    <tr>
      <td>${i+1}</td>
      <td>${it.title}<div class="muted">by ${it.author}</div></td>
      <td>${it.qty}</td>
      <td>₹${currency(it.price)}</td>
      <td>₹${currency(it.qty*it.price)}</td>
    </tr>
  `).join('');

  document.getElementById('order-confirmation-box').innerHTML = `
    <div style="background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%); padding: 24px; border-radius: 12px; margin-bottom: 20px; border: 2px solid #10b981;">
      <h3 style="color: #065f46; margin: 0 0 8px 0;">✅ Order Placed Successfully!</h3>
      <p style="color: #047857; margin: 0;"><strong>Order ID:</strong> ${order.id}</p>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
      <div><strong>Pondicherry University Book Store</strong><div class="muted">Campus Store</div></div>
      <div style="text-align:right">
        <div><strong>Order Date:</strong> ${new Date(order.date).toLocaleString()}</div>
      </div>
    </div>
    <div style="margin: 16px 0; padding: 16px; background: rgba(99,102,241,0.05); border-radius: 8px;">
      <strong>Delivery Address:</strong>
      <div class="muted" style="margin-top: 4px;">${order.address}</div>
      <div class="muted" style="margin-top: 4px;">Phone: ${order.phone}</div>
    </div>
    <div class="muted" style="margin:6px 0"><strong>Customer:</strong> ${order.username} &nbsp; | &nbsp; <strong>Payment:</strong> ${order.method}</div>
    <table style="margin-top:10px">
      <tr><th>#</th><th>Item</th><th>Qty</th><th>Price</th><th>Amount</th></tr>
      ${rows}
      <tr><td colspan="4" style="text-align:right"><strong>Subtotal</strong></td><td><strong>₹${currency(order.totals.subtotal)}</strong></td></tr>
      <tr><td colspan="4" style="text-align:right">GST (5%)</td><td>₹${currency(order.totals.gst)}</td></tr>
      <tr><td colspan="4" style="text-align:right"><strong>Total</strong></td><td><strong>₹${currency(order.totals.grand)}</strong></td></tr>
    </table>
    <div class="muted" style="margin-top:10px">Your order will be delivered within 5-7 business days. Thank you for your purchase!</div>
  `;

  state.cart = [];
  syncCartBadge();
  showSection('order-confirmation');
});

// Track Order Functionality - initialized in DOMContentLoaded


/* ---------- User Menu Events ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const userIcon = document.getElementById('user-icon');
  const logoutBtn = document.getElementById('logout-btn');
  
  if (userIcon) {
    userIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleUserMenu();
    });
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      logout();
    });
  }
  
  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const userMenu = document.getElementById('user-menu');
    if (userMenu && !userMenu.contains(e.target)) {
      closeUserMenu();
    }
  });
});

/* ---------- Initial Bindings ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  // Initialize localStorage
  initLocalStorage();
  
  // Initialize auth tabs
  initAuthTabs();
  
  // Check if user is logged in
  const isLoggedIn = checkSession();
  
  // Load books from localStorage (always load, even if not logged in)
  loadBooksFromDB();
  
  if (isLoggedIn) {
    // Load cart if logged in
    loadCart();
    syncCartBadge();
  }
  
  // Show appropriate section based on URL hash or default to home
  const initial = (location.hash||'#home').replace('#','');
  
  // If logged in and trying to access login, redirect to home
  if (isLoggedIn && initial === 'login') {
    showSection('home');
  } else if(document.getElementById(initial)) {
    showSection(initial);
  } else {
    // Default to home page
    showSection('home');
  }
  
  // Attach cart listeners to existing buttons
  attachCartListeners();
  
  // Initialize track order button if it exists
  const trackBtn = document.getElementById('track-order-btn');
  if (trackBtn && !trackBtn.hasAttribute('data-initialized')) {
    trackBtn.setAttribute('data-initialized', 'true');
    trackBtn.addEventListener('click', ()=>{
      const orderId = (document.getElementById('track-order-id').value||'').trim().toUpperCase();
      const errorBox = document.getElementById('track-error');
      const resultBox = document.getElementById('track-result');
      
      errorBox.style.display = 'none';
      resultBox.innerHTML = '';
      
      if(!orderId) {
        errorBox.textContent = 'Please enter an Order ID.';
        errorBox.style.display = 'block';
        return;
      }
      
      const orders = JSON.parse(localStorage.getItem('bookstore_invoices') || '[]');
      const order = orders.find(o => o.id === orderId);
      
      if(!order) {
        errorBox.textContent = 'Order not found. Please check your Order ID.';
        errorBox.style.display = 'block';
        return;
      }
      
      // Display order tracking
      const statusSteps = [
        { key: 'Confirmed', label: 'Order Confirmed', icon: '✅' },
        { key: 'Processing', label: 'Processing', icon: '📦' },
        { key: 'Shipped', label: 'Shipped', icon: '🚚' },
        { key: 'Delivered', label: 'Delivered', icon: '🏠' }
      ];
      
      const currentStatus = order.status || 'Confirmed';
      const statusIndex = statusSteps.findIndex(s => s.key === currentStatus);
      
      let statusHTML = '<div style="margin-top: 20px;"><h3>Order Status: ' + currentStatus + '</h3>';
      statusHTML += '<div style="margin: 16px 0;">';
      
      statusSteps.forEach((step, index) => {
        const isActive = index <= statusIndex;
        statusHTML += `
          <div style="display: flex; align-items: center; margin: 12px 0; padding: 12px; background: ${isActive ? 'rgba(99,102,241,0.1)' : 'rgba(0,0,0,0.05)'}; border-radius: 8px; border-left: 4px solid ${isActive ? 'var(--pu-blue)' : '#ccc'};">
            <span style="font-size: 24px; margin-right: 12px;">${step.icon}</span>
            <div>
              <strong style="color: ${isActive ? 'var(--pu-blue-dark)' : '#999'};">${step.label}</strong>
              ${index === statusIndex ? '<div class="muted" style="font-size: 12px; margin-top: 4px;">Current Status</div>' : ''}
            </div>
          </div>
        `;
      });
      
      statusHTML += '</div>';
      
      statusHTML += `
        <div style="margin-top: 20px; padding: 16px; background: rgba(99,102,241,0.05); border-radius: 8px;">
          <strong>Order Details:</strong>
          <div style="margin-top: 8px;">
            <div><strong>Order ID:</strong> ${order.id}</div>
            <div><strong>Order Date:</strong> ${new Date(order.date).toLocaleString()}</div>
            <div><strong>Total Amount:</strong> ₹${currency(order.totals.grand)}</div>
            <div><strong>Delivery Address:</strong> ${order.address || 'N/A'}</div>
          </div>
        </div>
      `;
      
      statusHTML += '</div>';
      
      resultBox.innerHTML = statusHTML;
    });
  }
});

document.querySelector('a[data-nav="catalogue"]').addEventListener('click', ()=>{
  document.getElementById('dept-filter').value='all';
  filterByDepartment('all');
});
