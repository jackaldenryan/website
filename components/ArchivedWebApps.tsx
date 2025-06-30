import Link from 'next/link';

export default function ArchivedWebApps() {
  const links = [
    { href: '../../pages/eye_tracking/index.html', text: 'WebGazer Eye Tracking' },
    { href: 'https://tinyurl.com/multifractal-jackryan', text: 'Multifractal Spectrum Calculator' },
    { href: '../../pages/fourier_drawing.html', text: 'Fourier of Drawn Function' },
  ];

  return (
    <div className="relative z-10">
      <div className="min-h-screen">
        <div className="flex flex-col items-start space-y-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="underline-magical text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text} &rarr;
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
