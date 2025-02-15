import React, { useState, useEffect } from "react";

const mockQuestions = [
  {
    question: "What is the ISL sign for '2'?",

    image1: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/2/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133235Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=006d31b12d97358f20a67c3b6a82b4e0838aecaa02bdf00ff2fa554661f3d27517fb87a8823760be1cf05e14b16ef23fa8410d6ef61cd2ddefb20b891842935d594fbecda22f1c6e03e17c8eac55b0f4773396928082de1097dfdee7cab43da9d3dd76ea085b19cf4a7b8afdd6f68b4006ad64e542fb3ed898dc6383d9550bebfbae90f7995edcae14df122c1dcff69a1fff94ce069981fd52ef1f51dedc7b7fe7e59a85f9939e4c2b2c985f2139784103c80b6b5bee8c6b2e4ddeb8516c7fca851ddbe9c299ec3090aa707d095add0a3b166aae454d11350788244390dc2ffd01fc10ce72a8604ff9338c8f8a4d9689229db38ae04b71315310860e8b30cb2b",

    image2: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/6/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133535Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=5f3febe76c35e2409bc7db2dd28a4ffec5410fb0e5f87fa8c9122af8f1916d7248c108c5543a6f189a233bda9d02489709a8fef760b13196b212e4e49ae7913d1fb118f40f4652962e5b6147bb824c2a52877ef930c2123c07d6105325db76f6acfc417f7ba2125a564df9aae41a70f68545ca0dcc77fb2545e3182d044f5eb38d5d56d234db0403841d2862d5709e31fe7ea3c37f75a15dd702d514dbfd6d9b6850f660ab467b21838c963d9aa6d51ac239797464deaab957f8ac28bcdd3f19a43042beb3fed22e903b30576a2c103bf6451c50a95b56dad65833a56837b4df506a9ae84f1fb155cbc68c6829fad62e1eb54c7d4c26d23ca55a999a9656afac",

   

    
    options: ["A", "B"],
  },
  {
    question: "What is the ISL sign for '4'?",

    image1: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/4/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133335Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=89185ea443d3e110c9a08d5e6b46ea133f4cbf41af67c77b5488958106e731edd340bcec5af135c6e83c121946baea797dc8900b54dac4352d5adbbce037a10fde661aac6971d7f86d387e4bcf961271eafffab1465c096173a4190ada4a0a2c0204421f8574f686be4d47247dc47c332d374614e74ba17ac537298eb624ff41939decdb4c24a59c5b3f9ec9a6abca6c2f28636c02f0df6b38aa2f57ada2164e1187cc5a916a8e6a2aff7a4fba6b50f61ac9d77cb1914d8e3f706d301efa5142cbb068e18f5893d692b29862e28951a02e8a7657969d0ab39937b7ed4f1c9c451f569a27afa70998c909f766503e8370bb9131659cb84ba2077950ebbb974c11",

    image2: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/6/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133535Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=5f3febe76c35e2409bc7db2dd28a4ffec5410fb0e5f87fa8c9122af8f1916d7248c108c5543a6f189a233bda9d02489709a8fef760b13196b212e4e49ae7913d1fb118f40f4652962e5b6147bb824c2a52877ef930c2123c07d6105325db76f6acfc417f7ba2125a564df9aae41a70f68545ca0dcc77fb2545e3182d044f5eb38d5d56d234db0403841d2862d5709e31fe7ea3c37f75a15dd702d514dbfd6d9b6850f660ab467b21838c963d9aa6d51ac239797464deaab957f8ac28bcdd3f19a43042beb3fed22e903b30576a2c103bf6451c50a95b56dad65833a56837b4df506a9ae84f1fb155cbc68c6829fad62e1eb54c7d4c26d23ca55a999a9656afac",

    
    options: ["A", "B"],
  },
  {
    question: "What is the ISL sign for '6'?",

    image1: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/6/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133535Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=5f3febe76c35e2409bc7db2dd28a4ffec5410fb0e5f87fa8c9122af8f1916d7248c108c5543a6f189a233bda9d02489709a8fef760b13196b212e4e49ae7913d1fb118f40f4652962e5b6147bb824c2a52877ef930c2123c07d6105325db76f6acfc417f7ba2125a564df9aae41a70f68545ca0dcc77fb2545e3182d044f5eb38d5d56d234db0403841d2862d5709e31fe7ea3c37f75a15dd702d514dbfd6d9b6850f660ab467b21838c963d9aa6d51ac239797464deaab957f8ac28bcdd3f19a43042beb3fed22e903b30576a2c103bf6451c50a95b56dad65833a56837b4df506a9ae84f1fb155cbc68c6829fad62e1eb54c7d4c26d23ca55a999a9656afac",
    
    image2: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/8/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133623Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=66a5f696767f99b74a470d697ac10754cf5647096df47ad1d651891e717ae2d7a5ffdcc8ec42307d1c847eba41a4c7d76a200331e1a8dc8ace8220d1b820e1a967272b818ab0ccacaa35e279dda1b36f761e4f00ce8c3866585d2fff0b16e9b3f6eb44d0aee785e309dbfd649de801c1ed45754db947d688edbdcf8f050969c52484f61f9d050fb17dce31bb2585bada4a81a8e6d69691e530b9658344399fb7b22bf08b949a78af105a1c3a30524c2250979bde5e91925fd33f8a19f2c329de3f2ae936db191b7ea009b0874273f0b61f4b47aa66622223cc16f8f6255f6acf03d28b11d7d8eb7204837141141a2bcbef5ba83afa0de8e8c1df9b641878fd2d",
 
    options: ["A", "B"],
  },
  {
    question: "What is the ISL sign for '8'?",

    image1: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/8/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133623Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=66a5f696767f99b74a470d697ac10754cf5647096df47ad1d651891e717ae2d7a5ffdcc8ec42307d1c847eba41a4c7d76a200331e1a8dc8ace8220d1b820e1a967272b818ab0ccacaa35e279dda1b36f761e4f00ce8c3866585d2fff0b16e9b3f6eb44d0aee785e309dbfd649de801c1ed45754db947d688edbdcf8f050969c52484f61f9d050fb17dce31bb2585bada4a81a8e6d69691e530b9658344399fb7b22bf08b949a78af105a1c3a30524c2250979bde5e91925fd33f8a19f2c329de3f2ae936db191b7ea009b0874273f0b61f4b47aa66622223cc16f8f6255f6acf03d28b11d7d8eb7204837141141a2bcbef5ba83afa0de8e8c1df9b641878fd2d",

    image2: "https://storage.googleapis.com/kagglesdsdata/datasets/1388661/2302731/Indian/6/0.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=databundle-worker-v2%40kaggle-161607.iam.gserviceaccount.com%2F20250215%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20250215T133535Z&X-Goog-Expires=345600&X-Goog-SignedHeaders=host&X-Goog-Signature=5f3febe76c35e2409bc7db2dd28a4ffec5410fb0e5f87fa8c9122af8f1916d7248c108c5543a6f189a233bda9d02489709a8fef760b13196b212e4e49ae7913d1fb118f40f4652962e5b6147bb824c2a52877ef930c2123c07d6105325db76f6acfc417f7ba2125a564df9aae41a70f68545ca0dcc77fb2545e3182d044f5eb38d5d56d234db0403841d2862d5709e31fe7ea3c37f75a15dd702d514dbfd6d9b6850f660ab467b21838c963d9aa6d51ac239797464deaab957f8ac28bcdd3f19a43042beb3fed22e903b30576a2c103bf6451c50a95b56dad65833a56837b4df506a9ae84f1fb155cbc68c6829fad62e1eb54c7d4c26d23ca55a999a9656afac",
    
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
      <div className="bg-white dark:bg-gray-200 p-8 shadow-lg rounded-lg  w-[75%]">
        <h2 className="text-3xl dark:text-blue-500  font-bold mb-4 text-center">ISL Numbers Quiz</h2>

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
