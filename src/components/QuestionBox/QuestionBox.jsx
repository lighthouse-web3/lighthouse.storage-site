import React, { useState } from 'react'
import './QuestionBox.scss'
import { BiChevronRight, BiChevronDown } from 'react-icons/bi'


function QuestionBox({ question }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="QuestionBox">
            <div className="title" onClick={() => {
                isOpen ? setIsOpen(false) : setIsOpen(true)
            }}>
                <p className="question">{question?.attributes?.question}</p>
                <div className="icon">
                    {
                        isOpen ? <BiChevronDown /> : <BiChevronRight />
                    }
                </div>
            </div>

            {
                isOpen && <div className="answer" dangerouslySetInnerHTML={{ __html: question?.attributes?.answer }}>

                </div>
            }

        </div>
    )
}

export default QuestionBox