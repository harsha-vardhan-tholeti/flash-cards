function FlashCard({ question, selectedId, setSelectedId }) {
  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };
  return (
    <div
      className={`bg-gray-300 h-48 rounded-2xl flex justify-center items-center font-mono text-lg text-center ${
        question.id === selectedId ? "bg-blue-200" : ""
      }`}
      onClick={() => handleClick(question.id)}
    >
      <p className="select-none">
        {question.id === selectedId ? question.answer : question.question}
      </p>
    </div>
  );
}

export default FlashCard;
