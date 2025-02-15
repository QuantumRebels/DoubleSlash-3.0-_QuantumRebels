import React, { useState, useEffect } from "react";

const mockQuestions = [
  {
    question: "What is the ISL sign for 'E'?",

    image1: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/E/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082749Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=03cbf19ca6ade9945736961e1e5344ee3a1951f7af4c1d90e661b19d1b41365d933642e637dfb0dcdadc83c74e3f9004da18063e130596d7de2713e641750bcf1c07be3b9a6376c3eeab2d619ba336d51cf6dde6c24d33ddb91b5d1fc8f8d83db5069ecc2a844c7a48262280b1575c56525bf011135bf437d2c766518ca33c7778804f40057d7444733110582407923e45cbedc8406ca037b94a0ebf44c53e5198c5abb5cfae053f56c9a039386e1d9e49063dd047bb1fe2047a2ca0f09a15da38b39c4b398f6544366d620f0f76d2453503d4ba8d8555e141d4ebfb893c4d4b0dbc709b15f089e7c0fb956e6306358f84ed488782e0ba8271bf9f1f5a6d7353",

    image2: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/H/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082912Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=ac9689f8f48113f4545960ffad45a76ad8ff413ab9d06d96bde1d75ea9797563a7c7501554a93b408d898cf7dd898a6bc3ef6385ace4f152f10ce144565e34e9012b1055c82a8aa22ae37a635582b51846356de1aa063424183ce6a8b79d726c495d9fc32ed8d592def1b7e08c7cccd9d18b671678c026202c450344898b2a0e8004b4a728cac544c7b6b74c1e5820cf2a7924f51f59bee6463a0b0e726588c35da590badc5443baa44bbba7d631dc57437d010551c03f8de4df0c0f9c24ad3f799bc87bc5fe60fbf873cfcd6553125834476dbfa832454c8cb1b620101ac64012a29659deb6a4f2d059523cd9d4b66cd75bd5c0bc89e4016dc0ebf21da5d783",

   

    
    options: ["A", "B"],
  },
  {
    question: "What is the ISL sign for 'H'?",

    image1: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/H/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082912Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=ac9689f8f48113f4545960ffad45a76ad8ff413ab9d06d96bde1d75ea9797563a7c7501554a93b408d898cf7dd898a6bc3ef6385ace4f152f10ce144565e34e9012b1055c82a8aa22ae37a635582b51846356de1aa063424183ce6a8b79d726c495d9fc32ed8d592def1b7e08c7cccd9d18b671678c026202c450344898b2a0e8004b4a728cac544c7b6b74c1e5820cf2a7924f51f59bee6463a0b0e726588c35da590badc5443baa44bbba7d631dc57437d010551c03f8de4df0c0f9c24ad3f799bc87bc5fe60fbf873cfcd6553125834476dbfa832454c8cb1b620101ac64012a29659deb6a4f2d059523cd9d4b66cd75bd5c0bc89e4016dc0ebf21da5d783",

    image2: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/E/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T082749Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=03cbf19ca6ade9945736961e1e5344ee3a1951f7af4c1d90e661b19d1b41365d933642e637dfb0dcdadc83c74e3f9004da18063e130596d7de2713e641750bcf1c07be3b9a6376c3eeab2d619ba336d51cf6dde6c24d33ddb91b5d1fc8f8d83db5069ecc2a844c7a48262280b1575c56525bf011135bf437d2c766518ca33c7778804f40057d7444733110582407923e45cbedc8406ca037b94a0ebf44c53e5198c5abb5cfae053f56c9a039386e1d9e49063dd047bb1fe2047a2ca0f09a15da38b39c4b398f6544366d620f0f76d2453503d4ba8d8555e141d4ebfb893c4d4b0dbc709b15f089e7c0fb956e6306358f84ed488782e0ba8271bf9f1f5a6d7353",

    
    options: ["A", "B"],
  },
  {
    question: "What is the ISL sign for 'N'?",

    image1: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/N/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083024Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=0ca91a3299617429b8badae49bdb700747fc6a355ab27fe737da4ca758eae0610f906a975578450839ddd4aa9189877536d1a804007b867b5157750406a2f4bc7b005a067876c8a34c492f84f55f199e33f6173dac9db3cf6b910441b23362c86a9374f2dac17855e431a4e1d5032aeca07f60890ead78f68e2e5813decfbe67fdf41e5b5d5f63cc27916beb89efe18d6c45f0aad2d1632aee14a7b73464cdae08fa2652feb4cb20709690c841d527faf8f9e6f32455741714afff30ba8ac23f25b38f4369e336568c8d4e0a73c2870946cc064ed008c8f35eb47f5237aa6fa7688a7965feb921ee7ca9040ecb6f0e5cbe419b46af2ce42badd61ee8830d6a9d",
    
    image2: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/R/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083124Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=a7c04bba6ab957c3f5be07a899fa49006fbc71dad8af407b41d464831fa3099bc500080486cca00e540daca026a7bdf413ec23829c6390f950ee134c0238cb64afc810ec6ae3aaf23c7e1b5f6f1e3b942ac6a93ebaaa5f500072cd257a6a04a9ca3f7f6cbef5771bbee1368ac08897d5827ffab694ee7824a54998d22d77225495a8c58961839017a109c44144ed6d222bfda7a5c26861ce7db7eb2d5dc2a4b446f2961fb5176669ca5267a4caa3c804dd9368b1162bddba0fe32411d1949bb6c86234d13552d6463112a0664efa5d868fe3af13e7cb7cbcd0888c8ad9de663e152800683fd170be9b0b2a85e1489f206bd31b9b363777f392b44dedb3bf6988",
 
    options: ["A", "B"],
  },
  {
    question: "What is the ISL sign for 'R'?",

    image1: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/R/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083124Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=a7c04bba6ab957c3f5be07a899fa49006fbc71dad8af407b41d464831fa3099bc500080486cca00e540daca026a7bdf413ec23829c6390f950ee134c0238cb64afc810ec6ae3aaf23c7e1b5f6f1e3b942ac6a93ebaaa5f500072cd257a6a04a9ca3f7f6cbef5771bbee1368ac08897d5827ffab694ee7824a54998d22d77225495a8c58961839017a109c44144ed6d222bfda7a5c26861ce7db7eb2d5dc2a4b446f2961fb5176669ca5267a4caa3c804dd9368b1162bddba0fe32411d1949bb6c86234d13552d6463112a0664efa5d868fe3af13e7cb7cbcd0888c8ad9de663e152800683fd170be9b0b2a85e1489f206bd31b9b363777f392b44dedb3bf6988",

    image2: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/N/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T083024Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=0ca91a3299617429b8badae49bdb700747fc6a355ab27fe737da4ca758eae0610f906a975578450839ddd4aa9189877536d1a804007b867b5157750406a2f4bc7b005a067876c8a34c492f84f55f199e33f6173dac9db3cf6b910441b23362c86a9374f2dac17855e431a4e1d5032aeca07f60890ead78f68e2e5813decfbe67fdf41e5b5d5f63cc27916beb89efe18d6c45f0aad2d1632aee14a7b73464cdae08fa2652feb4cb20709690c841d527faf8f9e6f32455741714afff30ba8ac23f25b38f4369e336568c8d4e0a73c2870946cc064ed008c8f35eb47f5237aa6fa7688a7965feb921ee7ca9040ecb6f0e5cbe419b46af2ce42badd61ee8830d6a9d",
    
    options: ["A", "B"],
  },

];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30); // 30-sec timer

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < mockQuestions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30); // Reset timer
    } else {
      alert("Quiz Completed! 🎉");
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 dark:bg-slate-900 rounded-xl w-full">
      <div className="bg-white dark:bg-gray-100 p-8 shadow-lg rounded-lg  w-[75%]">
        <h2 className="text-3xl dark:text-blue-500  font-bold mb-4 text-center">ISL Alphabets Quiz</h2>

        {/* Timer Display */}
        <p className={`text-lg font-semibold mb-2 mt-2 text-center ${timeLeft <= 5 ? "text-red-500" : "text-green-500"}`}>
          ⏳ Time Left: {timeLeft}s
        </p>

        {/* Question */}
        <p className="text-lg  font-bold">Q.  {mockQuestions[currentQuestion].question}</p>

        {/* Image */}
        <div className="flex flex-row flex-wrap mt-4 mb-4">
        <img src={mockQuestions[currentQuestion].image1} alt="ISL Sign" className="w-40 h-40 rounded-lg mx-auto my-4" />
        {/* Image */}
        <img src={mockQuestions[currentQuestion].image2} alt="ISL Sign" className="w-40 h-40 rounded-lg mx-auto my-4" />
        
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4">
          {mockQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className="bg-blue-500 text-white font-bold text-lg px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={handleNextQuestion}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next Question Button */}
        <div className="flex flex-row justify-between">
        <button
          onClick={handleNextQuestion}
          className="mt-4 bg-green-500 font-bold text-white px-4 py-2 rounded-lg"
        >
          Next Question
        </button>
        <button
          onClick={handleNextQuestion}
          className="mt-4 bg-green-500  font-bold text-white px-4 py-2 rounded-lg"
        >
          Submit Answer
        </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
