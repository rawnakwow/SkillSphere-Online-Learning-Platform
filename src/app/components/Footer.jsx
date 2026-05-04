import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <div className="text-2xl font-bold text-white mb-2">SkillSphere</div>
        <p>Providing quality education since 2024.<br/>Empowering learners worldwide.</p>
      </aside> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <Link href="/" className="link link-hover">Home</Link>
        <Link href="/courses" className="link link-hover">Courses</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <Link href="/terms" className="link link-hover">Terms & Conditions</Link>
        <Link href="/privacy" className="link link-hover">Privacy policy</Link>
      </nav>
      <form>
        <h6 className="footer-title">Newsletter</h6> 
        <div className="join">
          <input type="text" placeholder="Email address" className="input input-bordered join-item text-black" /> 
          <button className="btn btn-primary join-item">Join</button>
        </div>
      </form>
    </footer>
  );
}
