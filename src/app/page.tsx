import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

export default function HomePage() {
  return <SpinLoader  containerClasses={clsx("bg-[blue] rou")} />;
}
