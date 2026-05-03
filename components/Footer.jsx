function Footer() {
  return (
    <footer className="border-t border-red-600/20 bg-zinc-950 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} Bin &amp; Gone. All rights reserved.
        </p>
        <div className="text-sm text-zinc-300">
          <a
            href="tel:9052606688"
            className="transition-colors duration-300 hover:text-red-500"
          >
            905-260-6688
          </a>
          <span className="mx-2 text-zinc-600">|</span>
          <a
            href="mailto:binandgonedurham@gmail.com"
            className="transition-colors duration-300 hover:text-red-500"
          >
            binandgonedurham@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
