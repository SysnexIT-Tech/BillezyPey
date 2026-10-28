import React, { useState } from 'react'
import {
  ArrowRight, Check, Menu, X, ShieldCheck, MessageCircle, Store,
  ChartNoAxesColumnIncreasing, Cloud, ReceiptText, CirclePlay,
  ChevronDown, Zap, Smartphone, CircleCheckBig, CreditCard, Utensils,
  Clock3, BadgeCheck
} from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Secure payment workflow', text: 'Track every bill clearly and only mark online orders paid after payment verification.' },
  { icon: MessageCircle, title: 'WhatsApp bill sharing', text: 'Share temporary bills and payment links, then send the final bill after confirmation.' },
  { icon: Store, title: 'Multiple stores, one login', text: 'Keep your restaurant outlets, menus and billing activity in one owner workspace.' },
  { icon: ChartNoAxesColumnIncreasing, title: 'A clearer business overview', text: 'See sales, pending bills and recent orders without juggling spreadsheets.' },
  { icon: Cloud, title: 'Access from anywhere', text: 'Use your billing workspace in a modern browser on desktop, tablet or mobile.' },
  { icon: ReceiptText, title: 'Cash and online bills', text: 'Finalize cash bills immediately or follow the online payment confirmation flow.' },
]

const steps = [
  ['01', 'Create your account', 'Register your restaurant and add your first store.'],
  ['02', 'Add your menu', 'Set up food items, categories and prices for faster billing.'],
  ['03', 'Create a bill', 'Select items, enter customer details and choose cash or online payment.'],
  ['04', 'Share and finalize', 'Share the payment request and send the final bill after payment confirmation.'],
]

const faqs = [
  ['Can I manage multiple restaurant locations?', 'Yes. The product structure supports multiple stores under one owner account. Store limits should match the subscription plan you configure.'],
  ['How does online payment work?', 'The backend should create a payment order and verify the gateway signature or a signed webhook before marking the bill paid. Test your payment provider configuration before accepting live payments.'],
  ['Can I send bills on WhatsApp?', 'The application can use Meta WhatsApp Cloud API to send bill templates. You need a valid token, phone number ID and an approved message template.'],
  ['Can I create cash bills?', 'Yes. Cash orders can be marked paid and finalized immediately. If WhatsApp is configured, the app can then attempt to send the final bill.'],
  ['Is this landing page connected to my backend?', 'This standalone frontend is ready to run and build. Its CTA buttons link to the registration/login routes you configure. Connect your existing auth endpoints before deploying it with your app.'],
]

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="ezyPey home">
    <span className="brand-mark">e</span>
    <span className="brand-copy"><b>ezyPey</b><small>Smart Billing for Restaurants</small></span>
  </a>
}

function Button({ children, variant = 'primary', href, onClick, className = '' }) {
  const classes = `btn btn-${variant} ${className}`
  if (href) return <a className={classes} href={href} onClick={onClick}>{children}</a>
  return <button className={classes} onClick={onClick}>{children}</button>
}

function DashboardMockup() {
  return <div className="visual">
    <div className="orbit orbit-a" /><div className="orbit orbit-b" />
    <div className="dashboard-card">
      <div className="dash-top"><span className="mini-brand"><span>e</span> ezyPey</span><span className="workspace"><i /> Workspace</span></div>
      <div className="dash-body">
        <aside className="dash-sidebar"><b>◈ Dashboard</b><span>▤ Orders</span><span>◫ Menu</span><span>▧ Bills</span><span>⚙ Settings</span></aside>
        <div className="dash-main">
          <h4>Good morning 👋</h4><p>Your business at a glance</p>
          <div className="stat-grid">
            <div><small>Paid sales</small><b>₹28,450</b><i>+12.8%</i></div>
            <div><small>Orders</small><b>124</b><i>Today</i></div>
            <div><small>Pending</small><b>08</b><i>To follow up</i></div>
          </div>
          <div className="chart-card"><div><b>Sales overview</b><small>Last 7 days</small></div>
            <svg viewBox="0 0 330 95" role="img" aria-label="Illustrative sales chart"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#2563eb" stopOpacity=".2"/><stop offset="1" stopColor="#2563eb" stopOpacity="0"/></linearGradient></defs><path d="M0 80 C20 65 27 70 45 56 S70 67 90 44 S119 50 139 33 S167 53 190 26 S225 43 245 17 S280 30 300 8 L330 15 L330 95 L0 95Z" fill="url(#fill)"/><path d="M0 80 C20 65 27 70 45 56 S70 67 90 44 S119 50 139 33 S167 53 190 26 S225 43 245 17 S280 30 300 8 L330 15" fill="none" stroke="#2563eb" strokeWidth="3" strokeLinecap="round"/></svg>
          </div>
          <div className="recent-card"><b>Recent bills</b><div><span>#EZ-1024 · Rahul</span><strong className="paid">Paid</strong></div><div><span>#EZ-1023 · Priya</span><strong className="pending">Pending</strong></div></div>
        </div>
      </div>
    </div>
    <div className="phone-card"><div className="phone-notch" /><div className="phone-brand"><span>e</span> ezyPey</div><div className="phone-total"><small>Amount to pay</small><b>₹450.00</b></div><div className="qr-art"><span className="qr-one"/><span className="qr-two"/><span className="qr-three"/><b>e</b></div><p>Scan to pay securely</p><div className="phone-pay">Continue to payment ↗</div><small className="phone-safe"><ShieldCheck size={12}/> Payment status verified</small></div>
    <div className="whatsapp-float"><span><MessageCircle size={18}/></span><div><b>Bill shared</b><small>WhatsApp · Ready to pay</small></div><CircleCheckBig size={19} className="float-check"/></div>
    <div className="visual-caption"><i /> One simple flow, from order to final bill</div>
  </div>
}

function PriceCard({ name, description, price, period, items, featured, onChoose }) {
  return <article className={`price-card ${featured ? 'featured' : ''}`}>
    {featured && <span className="popular">MOST POPULAR</span>}
    <div className="plan-icon"><Zap size={18}/></div><h3>{name}</h3><p>{description}</p>
    <div className="price">{price}<small>{period}</small></div><div className="price-rule" />
    <ul>{items.map(item => <li key={item}><Check size={16}/>{item}</li>)}</ul>
    <Button variant={featured ? 'primary' : 'outline'} className="price-cta" onClick={onChoose}>Choose {name} <ArrowRight size={16}/></Button>
  </article>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [billing, setBilling] = useState('monthly')
  const [notice, setNotice] = useState('')
  const closeMenu = () => setMenuOpen(false)
  // Set these paths to match your existing React Router auth routes.
  const loginUrl = '/login'
  const registerUrl = '/register'
  const choosePlan = () => { window.location.href = registerUrl }
  const showDemo = () => setNotice('Demo preview: add your own video URL or connect this button to your product demo.')

  return <div className="landing">
    {notice && <div className="notice" role="status"><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Close notice"><X size={16}/></button></div>}
    <header className="header">
      <div className="header-inner"><Brand />
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a><a href="#features" onClick={closeMenu}>Features</a><a href="#how-it-works" onClick={closeMenu}>How it works</a><a href="#pricing" onClick={closeMenu}>Pricing</a><a href="#faq" onClick={closeMenu}>FAQ</a>
          <div className="nav-actions"><Button variant="outline" href={loginUrl} onClick={closeMenu}>Log in</Button><Button href={registerUrl} onClick={closeMenu}>Get started <ArrowRight size={16}/></Button></div>
        </nav>
      </div>
    </header>

    <main>
      <section className="hero" id="home"><div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
        <div className="container hero-grid"><div className="hero-copy">
          <div className="eyebrow"><span/> RESTAURANT BILLING, MADE SIMPLE</div>
          <h1>Serve great food.<br/>Simplify <em>every bill.</em></h1>
          <p className="hero-lede">Create bills, manage restaurant stores and share payment links on WhatsApp — all from one easy workspace.</p>
          <div className="hero-actions"><Button className="btn-large" href={registerUrl}>Start free <ArrowRight size={18}/></Button><Button variant="glass" className="btn-large" onClick={showDemo}><CirclePlay size={18}/> See how it works</Button></div>
          <div className="proof"><div className="avatars"><span>R</span><span>A</span><span>P</span></div><div><b>Built for restaurant teams</b><small>Simple workflows. Clear payment status.</small></div></div>
          <div className="checks"><span><Check/> Easy to use</span><span><Check/> Cash & online</span><span><Check/> Multi-store</span></div>
        </div><DashboardMockup/></div>
        <div className="hero-bottom"><div className="container bottom-inner"><span>MADE FOR EVERYDAY SERVICE</span><b><Store/> Restaurants</b><b><Utensils/> Cafés & bakeries</b><b><Smartphone/> Takeaway orders</b><b><CreditCard/> Cash & digital payments</b></div></div>
      </section>

      <section className="section features" id="features"><div className="container"><div className="section-heading"><span className="kicker">YOUR BILLING, UNDER CONTROL</span><h2>Everything you need to <em>keep service moving.</em></h2><p>Spend less time managing bills and more time looking after your guests.</p></div>
        <div className="feature-grid">{features.map(({icon: Icon, title, text}, i) => <article className="feature-card" key={title}><div className={`feature-icon tint-${i%4}`}><Icon size={23}/></div><h3>{title}</h3><p>{text}</p><span className="feature-number">0{i+1}</span></article>)}</div>
      </div></section>

      <section className="section work" id="how-it-works"><div className="container work-grid"><div><span className="kicker">A CLEARER WAY TO BILL</span><h2>From order to paid.<br/><em>Without the busywork.</em></h2><p className="section-lede">A simple process your team can learn quickly, whether the customer pays in cash or online.</p>
        <div className="steps">{steps.map(([num,title,text]) => <div className="step" key={num}><div className="step-num">{num}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><Button href={registerUrl}>Build your workspace <ArrowRight size={17}/></Button>
      </div><div className="flow-panel"><div className="flow-glow"/><div className="flow-label">THE ezyPey BILLING FLOW</div>
        <FlowItem icon={ReceiptText} title="Temporary bill" desc="Order items and customer details" status="CREATED"/>
        <div className="flow-connector"/><FlowItem icon={MessageCircle} green title="WhatsApp payment link" desc="Customer receives the payment request" status="SHARED"/>
        <div className="flow-connector"/><FlowItem icon={ShieldCheck} title="Payment verified" desc="Gateway confirmation updates the bill" status="PAID" success/>
        <div className="flow-connector"/><FlowItem icon={CircleCheckBig} gold title="Final bill" desc="Final receipt is sent to the customer" status="DONE" success/>
        <div className="flow-note"><ShieldCheck size={17}/><span>Cash orders can be finalized immediately. Online orders should only finalize after verified payment.</span></div>
      </div></div></section>

      <section className="section pricing" id="pricing"><div className="container"><div className="section-heading"><span className="kicker">STRAIGHTFORWARD PRICING</span><h2>A plan for the way <em>you grow.</em></h2><p>Illustrative plan options for restaurants at every stage.</p><div className="billing-toggle"><button className={billing==='monthly'?'selected':''} onClick={()=>setBilling('monthly')}>Monthly</button><button className={billing==='yearly'?'selected':''} onClick={()=>setBilling('yearly')}>Yearly <span>Save more</span></button></div></div>
        <div className="pricing-grid"><PriceCard name="Starter" description="For a single restaurant getting organized" price={billing==='monthly'?'₹999':'₹9,990'} period={billing==='monthly'?'/ month':'/ year'} items={['1 store','Menu & bill management','Cash and online bill workflow','Basic billing dashboard']} onChoose={choosePlan}/><PriceCard featured name="Growth" description="For busy teams and growing businesses" price={billing==='monthly'?'₹1,999':'₹19,990'} period={billing==='monthly'?'/ month':'/ year'} items={['Up to 3 stores','WhatsApp bill workflow','Payment status tracking','Sales overview']} onChoose={choosePlan}/><PriceCard name="Scale" description="For multi-location restaurant groups" price={billing==='monthly'?'₹3,999':'₹39,990'} period={billing==='monthly'?'/ month':'/ year'} items={['Up to 10 stores','Centralized store management','Priority support workflow','Advanced plan limits']} onChoose={choosePlan}/></div>
        <p className="pricing-note">Prices shown are sample marketing content. Update these to match your actual subscription plans before launch.</p>
      </div></section>

      <section className="section faq" id="faq"><div className="container faq-grid"><div><span className="kicker">GOOD QUESTIONS</span><h2>Everything you need to <em>know first.</em></h2><p className="section-lede">A few quick answers to help you decide if ezyPey fits your restaurant.</p><Button variant="outline" href={registerUrl}>Try ezyPey <ArrowRight size={16}/></Button></div><div className="faq-list">{faqs.map(([q,a],i)=><article className={`faq-item ${openFaq===i?'expanded':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button>{openFaq===i&&<p>{a}</p>}</article>)}</div></div></section>

      <section className="cta"><div className="container cta-inner"><div><span className="kicker">YOUR NEXT SHIFT, SIMPLIFIED</span><h2>Ready to make billing <em>feel easier?</em></h2><p>Bring your restaurant's billing workflow into one simple workspace.</p></div><Button variant="light" className="btn-large" href={registerUrl}>Get started free <ArrowRight size={18}/></Button></div></section>
    </main>

    <footer className="footer"><div className="container"><div className="footer-top"><Brand light/><p>Better billing. Smoother service.</p><div className="footer-links"><a href="#features">Features</a><a href="#how-it-works">How it works</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a><a href={loginUrl}>Log in</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} ezyPey. All rights reserved.</span><span>Verify payments before marking bills as paid.</span></div></div></footer>
  </div>
}

function FlowItem({icon: Icon, title, desc, status, green, gold, success}) {
  return <div className="flow-item"><span className={`flow-icon ${green?'green':''} ${gold?'gold':''}`}><Icon size={20}/></span><div><b>{title}</b><small>{desc}</small></div><span className={`flow-status ${success?'success':''}`}>{status}</span></div>
}