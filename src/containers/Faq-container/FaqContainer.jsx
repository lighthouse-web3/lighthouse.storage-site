import React, { useEffect } from 'react'
import QuestionBox from '../../components/QuestionBox/QuestionBox'
import './FaqContainer.scss'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import Pagination from '../../components/Pagination/Pagination'



function FAQContainer({ contentData }) {
    const questions = contentData;
    console.log(questions);
    const [searchWord, setSearchWord] = useState('');
    const [currentQuestions, setCurrentQuestions] = useState(questions);
    const [filteredQuestions, setFilteredQuestions] = useState(questions);

    useEffect(() => {
        if (searchWord.length > 0) {
            let filteredQuestions = questions.filter((item) => item?.['attributes']?.question?.includes(searchWord));
            setCurrentQuestions(filteredQuestions);
        } else {
            setCurrentQuestions(questions)
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
                            currentQuestions.length > 0 && currentQuestions.map((question, key) => <QuestionBox question={question} key={key} />)
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