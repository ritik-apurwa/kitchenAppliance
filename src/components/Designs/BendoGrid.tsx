interface BendoStyleInterface {
  title: string;
  para?: string;
}

export default function BendoStyle({ title , para }: BendoStyleInterface) {
  return (
    <section>
      <div className="flex flex-row items-center justify-center gap-y-8">
        <div className="h-1 bg-indigo-600 w-full max-w-20 mx-auto"></div>
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">
          {title}
        </h1>
        <div className="h-1 bg-indigo-600 w-full max-w-20 mx-auto"></div>
      </div>
      <div className="">
        <h3 className="text-center text-md font-bold font-sans">
          {para}
        </h3>
      </div>
      
    </section>
  );
}
