type suggestionProps = {
  username: string;
};

const Suggestion = ({ username }: suggestionProps) => {
  return (
    <>
      <div className="text-center ml-2">
        <img
          className="h-20 w-20 rounded-full ml-5 "
          src="https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
        />
        {username}
      </div>
    </>
  );
};

export default Suggestion;
