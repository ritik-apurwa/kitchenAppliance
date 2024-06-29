interface BendoStyleInterface {
  title: string;
  para?: string;
}

export default function BendoStyle({ title, para }: BendoStyleInterface) {
  return (
    <section className=" flex flex-col items-center py-4 w-full">
      <div className="flex flex-row items-center justify-center w-fit gap-x-10">
        <div className="h-0.5 bg-indigo-600 w-full min-w-16 mx-auto"></div>
        <div className="min-w-fit ">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-900 dark:text-gray-100">
            {title}
          </h1>
        </div>
        <div className="h-0.5 bg-indigo-600 w-full min-w-16 mx-auto"></div>
      </div>

      <div className="">
        <h3 className="text-center text-md font-bold font-sans">{para}</h3>
      </div>
    </section>
  );
}
