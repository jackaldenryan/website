import WebApps from '@/components/WebApps';
import MainLayout from '@/layouts/MainLayout';

export const metadata = {
  title: 'Web Apps - Jack Ryan',
  description: 'My Web Apps - Jack Ryan',
};

export default function Page() {
  return (
    <MainLayout>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Web Apps
        </h1>
      </div>
      <WebApps />
    </MainLayout>
  );
}
