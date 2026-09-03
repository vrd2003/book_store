import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

type Book = {
  id?: string;
  title: string;
  author: string;
  price: number;
  category: string;
  description?: string;
  imageUrl?: string;
  stock?: number;
};

type User = { name: string; email: string; role?: string };

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8080/api' });
const fallbackBooks: Book[] = [
  { id: '1', title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', price: 18.99, category: 'Fiction', description: 'A dazzling novel about friendship, creativity, and the games we make together.', imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=85' },
  { id: '2', title: 'The Creative Act', author: 'Rick Rubin', price: 21.5, category: 'Non-fiction', description: 'A beautiful, practical meditation on making art and finding your voice.', imageUrl: 'https://images.unsplash.com/photo-1511108690759-009324a90311?auto=format&fit=crop&w=600&q=85' },
  { id: '3', title: 'The Very Secret Society of Irregular Witches', author: 'Sangu Mandanna', price: 16.75, category: 'Fantasy', description: 'Found family, a cozy house, and just enough magic to change everything.', imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=85' },
  { id: '4', title: 'Piranesi', author: 'Susanna Clarke', price: 14.2, category: 'Fiction', description: 'A luminous story of wonder, solitude, and the strange beauty of a world.', imageUrl: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=600&q=85' },
];

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All books');
  const [cart, setCart] = useState<Book[]>([]);
  const [user, setUser] = useState<User | null>(() => JSON.parse(localStorage.getItem('bookshop-user') || 'null'));
  const [authMode, setAuthMode] = useState<'login' | 'register' | null>(null);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    api.get<Book[]>('/books').then(({ data }) => setBooks(data.length ? data : fallbackBooks)).catch(() => setBooks(fallbackBooks));
  }, []);

  const categories = ['All books', ...Array.from(new Set(books.map((book) => book.category)))];
  const filteredBooks = books.filter((book) => {
    const matchesText = `${book.title} ${book.author}`.toLowerCase().includes(query.toLowerCase());
    return matchesText && (category === 'All books' || book.category === category);
  });

  const addToCart = (book: Book) => {
    setCart((current) => [...current, book]);
    setNotice(`${book.title} added to your bag`);
    window.setTimeout(() => setNotice(''), 2400);
  };

  const submitAuth = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const mode = authMode === 'register' ? 'register' : 'login';
    try {
      const { data } = await api.post(`/users/${mode}`, Object.fromEntries(form.entries()));
      const nextUser = { name: data.name, email: data.email, role: data.role };
      setUser(nextUser);
      localStorage.setItem('bookshop-user', JSON.stringify(nextUser));
      setAuthMode(null);
      setNotice(`Welcome${data.name ? `, ${data.name}` : ''}`);
    } catch (error) {
      setNotice(axios.isAxiosError(error) ? (error.response?.data?.message || 'Please check your details and try again.') : 'Something went wrong.');
    }
  };

  const signOut = () => { setUser(null); localStorage.removeItem('bookshop-user'); };

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Leaf & Letter home"><span className="brand-mark">L</span><span>leaf <em>&</em> letter</span></a>
        <nav><a href="#catalogue">Catalogue</a><a href="#about">About us</a><a href="#journal">Journal</a></nav>
        <div className="top-actions"><button className="icon-button" aria-label="Search" onClick={() => document.getElementById('catalogue')?.scrollIntoView()}>⌕</button><button className="bag-button" onClick={() => setNotice(`${cart.length} ${cart.length === 1 ? 'book' : 'books'} in your bag`)}>Bag <span>{cart.length}</span></button>{user ? <button className="account-button" onClick={signOut}>{user.name.split(' ')[0]} · sign out</button> : <button className="account-button" onClick={() => setAuthMode('login')}>Sign in</button>}</div>
      </header>

      <main id="top">
        <section className="hero"><div className="hero-copy"><p className="eyebrow">A little more wonder</p><h1>Stories for<br /><i>slow days.</i></h1><p className="hero-text">Thoughtfully chosen books for curious minds, quiet corners, and everywhere in between.</p><a className="primary-button" href="#catalogue">Explore the collection <span>↗</span></a></div><div className="hero-art"><div className="sun-shape" /><div className="book-stack"><div className="book book-top">THE<br /><strong>CREATIVE<br />ACT</strong></div><div className="book book-middle">THE<br /><strong>SECRET<br />GARDEN</strong></div><div className="book book-bottom">READ<br /><strong>WIDELY</strong></div></div><p className="art-caption">Curated for your<br /><em>next chapter</em></p></div></section>

        <section className="intro-strip"><p>New season, new perspective</p><p className="intro-note">Books are a way of paying attention.<br />Find one that holds your gaze.</p></section>

        <section className="catalogue" id="catalogue"><div className="section-heading"><div><p className="eyebrow">The collection</p><h2>Find your next<br /><i>favourite.</i></h2></div><p className="section-description">Every title earns its place here. Browse our shelves of considered reads, from page-turning fiction to ideas worth sitting with.</p></div><div className="catalogue-tools"><div className="search-field"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by title or author" aria-label="Search books" /></div><div className="category-tabs">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div></div><div className="book-grid">{filteredBooks.map((book) => <article className="book-card" key={book.id || book.title}><div className="cover-wrap"><img src={book.imageUrl || fallbackBooks[0].imageUrl} alt={`${book.title} cover`} /><button className="quick-add" onClick={() => addToCart(book)} aria-label={`Add ${book.title} to bag`}>+</button></div><div className="book-meta"><p className="book-category">{book.category}</p><h3>{book.title}</h3><p className="author">{book.author}</p><p className="price">${book.price.toFixed(2)}</p></div></article>)}</div>{filteredBooks.length === 0 && <p className="empty-state">No books found. Try a different search.</p>}</section>

        <section className="quote-section" id="about"><p className="quote-mark">“</p><blockquote>A room without books is like a body without a soul.</blockquote><p className="quote-source">— Cicero</p></section>
      </main>

      {notice && <div className="toast" role="status">{notice}</div>}
      {authMode && <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setAuthMode(null)}><form className="auth-modal" onSubmit={submitAuth}><button type="button" className="modal-close" onClick={() => setAuthMode(null)} aria-label="Close">×</button><p className="eyebrow">{authMode === 'register' ? 'Join the shelves' : 'Welcome back'}</p><h2>{authMode === 'register' ? 'Make room for more stories.' : 'Good books remember you.'}</h2>{authMode === 'register' && <label>Name<input name="name" required placeholder="Your name" /></label>}<label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Password<input name="password" type="password" minLength={6} required placeholder="At least 6 characters" /></label>{authMode === 'register' && <label>Phone <span>(optional)</span><input name="phone" placeholder="+1 555 000 0000" /></label>}<button className="primary-button" type="submit">{authMode === 'register' ? 'Create account' : 'Sign in'} <span>↗</span></button><button className="switch-auth" type="button" onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}>{authMode === 'login' ? 'New here? Create an account' : 'Already a member? Sign in'}</button></form></div>}
    </div>
  );
}

export default App;
