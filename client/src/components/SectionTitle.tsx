/* eslint-disable @typescript-eslint/no-explicit-any */
interface SectionTitleProps {
    title: string;
    body: any;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, body }) => {
    return (
        <div className='w-full md:w-1/2 p-4 mb-8 rounded bg-slate-900 text-white'>
            <h1 className='text-3xl font-semibold mb-4'>{title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default SectionTitle;
