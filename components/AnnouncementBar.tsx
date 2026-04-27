export default function AnnouncementBar() {
  return (
    <div className="bg-[#D32F2F] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-white text-center">
          If you'd like to stay up-to-date with the news at Manx Autoglazing,{' '}
          <a
            href="https://www.facebook.com/ManxAutoglazing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-gray-200 transition-colors"
          >
            check out our Facebook page
          </a>
        </p>
      </div>
    </div>
  );
}
