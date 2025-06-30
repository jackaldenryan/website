import Link from 'next/link';

export default function Intro() {
  const links = [
    { href: 'https://www.rayos.ai/idea-gpt', text: 'IdeaGPT' },
    // { href: '../pages/eye_tracking/index.html', text: 'WebGazer Eye Tracking' },
    // { href: 'https://tinyurl.com/multifractal-jackryan', text: 'Multifractal Spectrum Calculator' },
    // { href: '../pages/fourier_drawing.html', text: 'Fourier of Drawn Function' },
    { href: '../pages/newtons_cradle.html', text: 'Newtons Cradle Simulator' },
    { href: '../pages/fractal_generator.html', text: 'Fractal Generator' },
    { href: '../webapps/archive', text: 'Archive' },
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
              target={link.text !== 'Archive' ? '_blank' : undefined}
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
