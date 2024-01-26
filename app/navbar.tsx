import React, { useEffect } from 'react';

const CursorNavigation: React.FC = () => {
  useEffect(() => {
    const link = document.querySelectorAll('nav > .hover-this');
    const cursor = document.querySelector('.cursor') as HTMLElement;

    if (!cursor) {
      console.error("Cursor element not found");
      return;
    }

    const animateit = function (this: any, e: { type?: any; offsetX?: any; offsetY?: any; }) {
      const span = this.querySelector('span');
      const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,
        move = 25,
        xMove = (x / width) * (move * 2) - move,
        yMove = (y / height) * (move * 2) - move;
      span.style.transform = `translate(${xMove}px, ${yMove}px)`;
      if (e.type === 'mouseleave') span.style.transform = '';
    };

    const editCursor = (e: { clientX: any; clientY: any; }) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
    };

    link.forEach((b) => b.addEventListener('mousemove', animateit));
    link.forEach((b) => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

    // Cleanup event listeners when component unmounts
    return () => {
      link.forEach((b) => b.removeEventListener('mousemove', animateit));
      link.forEach((b) => b.removeEventListener('mouseleave', animateit));
      window.removeEventListener('mousemove', editCursor);
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div>
      <style>{`
        .nav-wrapper {
          width: 100%;
          height: 100vh; /* Change this to 100% if you want full height */
          background: #6f6c67;
          padding:40px;
          display: flex;
          justify-content: center;
          align-items: flex-start; /* Align to the top */
        }

        nav {
          width: 100%;
          text-align: center;
        }

        .hover-this {
          transition: all 0.3s ease;
          display: inline-block;
        }

        span {
          display: inline-block;
          font-family: "Monument Extended";
          font-weight: 300;
          color: #fff;
          font-size: 36px;
          text-transform: uppercase;
          pointer-events: none;
          transition: transform 0.1s linear;
        }

        .cursor {
          pointer-events: none;
          position: fixed;
          padding: 0.65rem;
          background-color: #fff;
          border-radius: 50%;
          mix-blend-mode: difference;
          transition: transform 0.3s ease;
        }

        .hover-this:hover ~ .cursor {
          transform: translate(-50%, -50%) scale(8);
        }

        @media(min-width: 900px) {
          nav {
            display: flex;
            justify-content: space-around;
          }
        }

        @media(max-width: 900px) {
          nav {
            top: 30%;
          }

          .hover-this {
            width: 100%;
            padding: 20px 0;
            display: inline-block;
          }
        }
      `}</style>

      {/* Your HTML structure here */}
      <div className="nav-wrapper">
        <nav>
          <a href="#" className="hover-this"><span>Home</span></a>
          <a href="#" className="hover-this"><span>Our Story</span></a>
          <a href="#" className="hover-this"><span>Studio</span></a>
          <a href="#" className="hover-this"><span>Contact</span></a>
          <div className="cursor"></div>
        </nav>
      </div>
    </div>
  );
};

export default CursorNavigation;
