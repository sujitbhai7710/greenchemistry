import { useState, useCallback, useEffect, useRef } from 'react';
import {
  allQuestions,
  sections,
  statusLabels,
  statusColors,
  type AnswerStatus,
} from './data/questions';
import {
  Star,
  ChevronDown,
  ChevronUp,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Menu,
  X,
  Search,
  Filter,
  ExternalLink,
  FileText,
  Award,
  BarChart3,
  ArrowUp,
} from 'lucide-react';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" title={`Importance: ${rating}/5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-amber-400 text-amber-400'
              : 'fill-gray-200 text-gray-200'
          }`}
        />
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: AnswerStatus }) {
  const icons = {
    well_answered: <CheckCircle2 className="w-3.5 h-3.5" />,
    partially_answered: <AlertTriangle className="w-3.5 h-3.5" />,
    not_in_pdf: <XCircle className="w-3.5 h-3.5" />,
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[status]}`}
    >
      {icons[status]}
      {statusLabels[status]}
    </span>
  );
}

function ImageModal({
  page,
  caption,
  onClose,
}: {
  page: number;
  caption: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-3 border-b">
          <h3 className="text-sm font-semibold text-gray-700">{caption}</h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="p-4">
          <img
            src={`/pdf_pages/page_${String(page).padStart(2, '0')}.png`}
            alt={caption}
            className="w-full rounded-lg border"
            loading="lazy"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">
            PDF Page {page}
          </p>
        </div>
      </div>
    </div>
  );
}

function QuestionCard({
  question,
  isExpanded,
  onToggle,
}: {
  question: (typeof allQuestions)[0];
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [showImage, setShowImage] = useState<{
    page: number;
    caption: string;
  } | null>(null);

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded && cardRef.current) {
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isExpanded]);

  const hasImages = question.images && question.images.length > 0;

  return (
    <>
      <div
        ref={cardRef}
        id={`q-${question.id}`}
        className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
      >
        {/* Card Header */}
        <button
          onClick={onToggle}
          className="w-full text-left p-4 sm:p-5 flex items-start gap-3 hover:bg-gray-50 transition-colors"
        >
          <div className="flex-shrink-0 mt-0.5">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md text-xs font-bold">
                Q{question.id}
              </span>
              <StatusBadge status={question.status} />
              <StarRating rating={question.importance} />
            </div>
            <h3 className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">
              {question.question}
            </h3>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5" />
                {question.marks}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-3.5 h-3.5" />
                Year: {question.year}
              </span>
              {question.pdfPages.length > 0 && (
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  PDF Pages: {question.pdfPages.join(', ')}
                </span>
              )}
              {question.repeated && (
                <span className="bg-red-100 text-red-700 px-1.5 py-0.5 rounded text-xs font-medium">
                  Repeated {question.repeated}
                </span>
              )}
            </div>
          </div>
        </button>

        {/* Expanded Answer */}
        {isExpanded && (
          <div className="border-t border-gray-100 bg-gray-50/50">
            {/* Images if available */}
            {hasImages && (
              <div className="p-4 border-b border-gray-100">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Images from PDF
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {question.images?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setShowImage(img)}
                      className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-indigo-300 transition-colors text-left"
                    >
                      <img
                        src={`/pdf_pages/page_${String(img.page).padStart(2, '0')}.png`}
                        alt={img.caption}
                        className="w-full h-40 object-top object-cover group-hover:opacity-90 transition-opacity"
                        loading="lazy"
                      />
                      <div className="p-2.5">
                        <p className="text-xs font-medium text-gray-700 line-clamp-2">
                          {img.caption}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Page {img.page}
                        </p>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/50 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-3.5 h-3.5 text-white" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Answer */}
            <div className="p-4 sm:p-5">
              <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Answer
              </h4>
              <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
                {question.answer}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {showImage && (
        <ImageModal
          page={showImage.page}
          caption={showImage.caption}
          onClose={() => setShowImage(null)}
        />
      )}
    </>
  );
}

function StatsDashboard() {
  const stats = {
    total: allQuestions.length,
    well: allQuestions.filter((q) => q.status === 'well_answered').length,
    partial: allQuestions.filter((q) => q.status === 'partially_answered').length,
    notInPdf: allQuestions.filter((q) => q.status === 'not_in_pdf').length,
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <BarChart3 className="w-4 h-4 text-indigo-500" />
          <span className="text-xs font-medium text-gray-500">Total Questions</span>
        </div>
        <p className="text-2xl font-bold text-gray-800">{stats.total}</p>
      </div>
      <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-medium text-emerald-700">Well Answered</span>
        </div>
        <p className="text-2xl font-bold text-emerald-800">{stats.well}</p>
        <p className="text-xs text-emerald-600 mt-1">
          {((stats.well / stats.total) * 100).toFixed(0)}% of total
        </p>
      </div>
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
          <span className="text-xs font-medium text-amber-700">Partially in PDF</span>
        </div>
        <p className="text-2xl font-bold text-amber-800">{stats.partial}</p>
        <p className="text-xs text-amber-600 mt-1">
          {((stats.partial / stats.total) * 100).toFixed(0)}% of total
        </p>
      </div>
      <div className="bg-rose-50 rounded-xl border border-rose-200 p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <XCircle className="w-4 h-4 text-rose-600" />
          <span className="text-xs font-medium text-rose-700">Not in PDF</span>
        </div>
        <p className="text-2xl font-bold text-rose-800">{stats.notInPdf}</p>
        <p className="text-xs text-rose-600 mt-1">
          {((stats.notInPdf / stats.total) * 100).toFixed(0)}% of total
        </p>
      </div>
    </div>
  );
}

function SectionLegend() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Legend</h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border ${statusColors.well_answered}`}>
            <CheckCircle2 className="w-3 h-3" />
            Well Answered
          </span>
          <span className="text-xs text-gray-500">Answer found in PDF</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border ${statusColors.partially_answered}`}>
            <AlertTriangle className="w-3 h-3" />
            Partially in PDF
          </span>
          <span className="text-xs text-gray-500">Partial answer in PDF</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium border ${statusColors.not_in_pdf}`}>
            <XCircle className="w-3 h-3" />
            Not in PDF
          </span>
          <span className="text-xs text-gray-500">Answer from research</span>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100">
        <h4 className="text-xs font-semibold text-gray-500 mb-2">Importance Stars</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <StarRating rating={5} />
            <span className="text-xs text-gray-500">Very Important</span>
          </div>
          <div className="flex items-center gap-2">
            <StarRating rating={3} />
            <span className="text-xs text-gray-500">Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <StarRating rating={1} />
            <span className="text-xs text-gray-500">Less Important</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<AnswerStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter questions
  const filteredQuestions = allQuestions.filter((q) => {
    const sectionMatch =
      activeSection === 'all' ||
      sections.find((s) => s.id === activeSection)?.questions.includes(q.id);
    const statusMatch = statusFilter === 'all' || q.status === statusFilter;
    const searchMatch =
      searchQuery === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.id.toString() === searchQuery;
    return sectionMatch && statusMatch && searchMatch;
  });

  const toggleQuestion = useCallback((id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const statusOptions: { value: AnswerStatus | 'all'; label: string }[] = [
    { value: 'all', label: 'All Status' },
    { value: 'well_answered', label: 'Well Answered' },
    { value: 'partially_answered', label: 'Partially in PDF' },
    { value: 'not_in_pdf', label: 'Not in PDF' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <BookOpen className="w-6 h-6 text-indigo-600 flex-shrink-0" />
              <div className="min-w-0">
                <h1 className="text-sm sm:text-lg font-bold text-gray-800 truncate">
                  Green Chemistry Exam Guide
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">
                  Previous Year Questions with Answers
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Search - hidden on small mobile */}
              <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-1.5">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-40 lg:w-56"
                />
              </div>

              {/* Mobile TOC Toggle */}
              <button
                onClick={() => setMobileTocOpen(!mobileTocOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Table of Contents"
              >
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="sm:hidden px-3 pb-2">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-full"
            />
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-14 left-0 w-72 h-[calc(100vh-3.5rem)] bg-white border-r border-gray-200 overflow-y-auto p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Sections</h3>
            <nav className="space-y-1">
              <button
                onClick={() => {
                  setActiveSection('all');
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  activeSection === 'all'
                    ? 'bg-indigo-50 text-indigo-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                All Sections ({allQuestions.length})
              </button>
              {sections.map((section) => {
                const count = section.questions.length;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === section.id
                        ? 'bg-indigo-50 text-indigo-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="block truncate">{section.title}</span>
                    <span className="text-xs text-gray-400">{count} questions</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile TOC Drawer */}
      {mobileTocOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileTocOpen(false)}
          />
          <div className="absolute top-14 right-0 w-72 h-[calc(100vh-3.5rem)] bg-white border-l border-gray-200 overflow-y-auto p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Jump to Question</h3>
            <div className="grid grid-cols-5 gap-1.5">
              {filteredQuestions.map((q) => (
                <a
                  key={q.id}
                  href={`#q-${q.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileTocOpen(false);
                    document.getElementById(`q-${q.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-center py-1.5 px-1 rounded text-xs font-medium transition-colors ${
                    q.status === 'well_answered'
                      ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                      : q.status === 'partially_answered'
                      ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                      : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                  }`}
                  title={`Q${q.id}: ${q.question.substring(0, 60)}...`}
                >
                  {q.id}
                </a>
              ))}
            </div>
            <SectionLegend />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="pt-20 sm:pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Hero Stats */}
          <div className="mb-6">
            <StatsDashboard />
          </div>

          <div className="flex gap-6">
            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-20 space-y-4">
                {/* Section Filter */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Filter className="w-4 h-4" />
                      Sections
                    </h2>
                  </div>
                  <nav className="p-2">
                    <button
                      onClick={() => setActiveSection('all')}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeSection === 'all'
                          ? 'bg-indigo-50 text-indigo-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      All Sections ({allQuestions.length})
                    </button>
                    {sections.map((section) => {
                      const count = section.questions.length;
                      const isActive = activeSection === section.id;
                      return (
                        <button
                          key={section.id}
                          onClick={() => setActiveSection(section.id)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                            isActive
                              ? 'bg-indigo-50 text-indigo-700 font-medium'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span className="block truncate leading-tight">
                            {section.title}
                          </span>
                          <span className="text-xs text-gray-400">{count} questions</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Status Filter */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-700">Filter by Status</h2>
                  </div>
                  <div className="p-2">
                    {statusOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => setStatusFilter(option.value)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          statusFilter === option.value
                            ? 'bg-gray-100 text-gray-800 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <SectionLegend />

                {/* TOC - Quick Jump */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <h2 className="text-sm font-semibold text-gray-700">Quick Jump</h2>
                  </div>
                  <div className="p-3 max-h-64 overflow-y-auto">
                    <div className="grid grid-cols-5 gap-1">
                      {filteredQuestions.map((q) => (
                        <a
                          key={q.id}
                          href={`#q-${q.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(`q-${q.id}`)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`text-center py-1 rounded text-xs font-medium transition-colors ${
                            q.status === 'well_answered'
                              ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                              : q.status === 'partially_answered'
                              ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                              : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                          }`}
                          title={q.question.substring(0, 80)}
                        >
                          {q.id}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Questions List */}
            <main className="flex-1 min-w-0">
              {/* Status Filter - Mobile */}
              <div className="lg:hidden mb-4">
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {statusOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setStatusFilter(option.value)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                        statusFilter === option.value
                          ? 'bg-indigo-600 text-white'
                          : 'bg-white text-gray-600 border border-gray-200'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-gray-500">
                  Showing <span className="font-semibold text-gray-700">{filteredQuestions.length}</span> questions
                  {activeSection !== 'all' && (
                    <span>
                      {' '}
                      from{' '}
                      <span className="font-medium">
                        {sections.find((s) => s.id === activeSection)?.title}
                      </span>
                    </span>
                  )}
                </p>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {filteredQuestions.map((q) => (
                  <QuestionCard
                    key={q.id}
                    question={q}
                    isExpanded={expandedId === q.id}
                    onToggle={() => toggleQuestion(q.id)}
                  />
                ))}
              </div>

              {filteredQuestions.length === 0 && (
                <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
                  <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">No questions match your filters.</p>
                  <button
                    onClick={() => {
                      setActiveSection('all');
                      setStatusFilter('all');
                      setSearchQuery('');
                    }}
                    className="mt-2 text-indigo-600 text-sm font-medium hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
