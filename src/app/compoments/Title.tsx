'use client'
export default function ColorFonts() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-900 p-4">
      <style jsx global>{`
        @font-face {
          font-family: 'Rocher';
          src: url('https://assets.codepen.io/9632/RocherColorGX.woff2');
        }

        .grays {
          --text-color: #d1d5db;
          --shadow-color: #1f2937;
          text-shadow: 
            -1px -1px 0 var(--shadow-color),
            2px 2px 0 var(--shadow-color),
            3px 3px 0 var(--shadow-color),
            4px 4px 0 var(--shadow-color),
            5px 5px 0 var(--shadow-color),
            6px 6px 0 var(--shadow-color);
        }

        .purples {
          --text-color: #c4b5fd;
          --shadow-color: #5b21b6;
          text-shadow: 
            -1px -1px 0 var(--shadow-color),
            2px 2px 0 var(--shadow-color),
            3px 3px 0 var(--shadow-color),
            4px 4px 0 var(--shadow-color),
            5px 5px 0 var(--shadow-color),
            6px 6px 0 var(--shadow-color);
        }

        .mint {
          --text-color: #a7f3d0;
          --shadow-color: #065f46;
          text-shadow: 
            -1px -1px 0 var(--shadow-color),
            2px 2px 0 var(--shadow-color),
            3px 3px 0 var(--shadow-color),
            4px 4px 0 var(--shadow-color),
            5px 5px 0 var(--shadow-color),
            6px 6px 0 var(--shadow-color);
        }
      `}</style>
      
      <h1 className="grays text-6xl font-bold" style={{ 
        fontFamily: 'Rocher',
        color: 'var(--text-color)',
        userSelect: 'none',
        marginBottom: "20px",
      }}>
        Do to List
      </h1>

    </div>
  )
}

