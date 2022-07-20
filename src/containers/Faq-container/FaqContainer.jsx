import React, { useEffect } from 'react'
import QuestionBox from '../../components/QuestionBox/QuestionBox'
import './FaqContainer.scss'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'



const questions = [
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dicta.",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil rerum mollitia magni iste neque totam quam esse, laudantium dicta minima."
    },
    {
        question: "Lorem ipsum  amet consectetur adipisicing elit.Dicta.",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil rerum mollitia magni iste neque totam quam esse, laudantium dicta minima."
    },
    {
        question: "elit corporis maxime, repudiandae nam voluptas at totam eligendi odio consequuntur",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil rerum mollitia magni iste neque totam quam esse, laudantium dicta minima."
    },
    {
        question: "deleniti eaque minima praesentium eius ea modi. Quae, fuga maxime",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil rerum mollitia magni iste neque totam quam esse, laudantium dicta minima."
    },
    {
        question: "consequuntur, ducimus ",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil rerum mollitia magni iste neque totam quam esse, laudantium dicta minima."
    },

]

function FAQContainer() {
    const [searchWord, setSearchWord] = useState('');
    // const [currentQuestions, setCurrentQuestions] = useState(questions);
    const [filteredQuestions, setFilteredQuestions] = useState(questions);

    useEffect(() => {
        if (searchWord.length > 0) {
            let filteredQuestions = questions.filter((item) => item.question.includes(searchWord));
            setFilteredQuestions(filteredQuestions);
        } else {
            setFilteredQuestions(questions)
        }
    }, [searchWord])

    return (
        <div className="FAQContainer section__padding" id="faq">

            <div className="faq">
                <div className="title">
                    <p className='gradient__text title__text'>Frequently Asked Questions</p>
                </div>

                <div className="faq__searchBox">
                    <div className="searchbox">
                        <span className="icon">
                            <BsSearch />
                        </span>
                        <input type="text"
                            value={searchWord}
                            onChange={(e) => {
                                setSearchWord(e.target.value)
                            }}
                            placeholder='Search FAQ' />
                    </div>
                </div>

                <div className="faq__contentContainer">
                    <div className="questionsContainer">
                        {
                            filteredQuestions.map((question, key) => <QuestionBox question={question} key={key} />)
                        }

                    </div>
                    {/* <div className="contextContainer">
                        <div className="title">Table of Context</div>
                        <div className="contexts">
                            <p>General</p>
                            <p>Trust and Safety</p>
                            <p>Service</p>
                            <p>Billing</p>
                        </div>
                    </div> */}
                </div>

            </div>

            {/* <Pagination data={filteredQuestions} setCurrentData={setCurrentQuestions} itemsPerPage={3} /> */}

        </div>
    )
}

export default FAQContainer