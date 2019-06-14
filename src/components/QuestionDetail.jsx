import React from 'react';
import Markdown from 'react-markdown';
import TagsList from './TagsList'
import { connect } from 'react-redux';

/**
 * Question Detail Display outputs a view containing question information when passed a question
 * as its prop
 * If no question is found, that means the saga that is loading it has not completed, and display an interim message
 */
const QuestionDetailDisplay = ({author,description,name,rank})=>(
    <div>
        <h3 className="mb-2">
            {name}
        </h3>
        {description ?
            <div>
                <div className="mb-3">
            {description}
                </div>
                {author}
                <div>
                    rank: {rank}
                </div>
            </div> :
            <div>
                {/* If saga has not yet gotten question details, display loading message instead. */}
                <h4>
                    Loading details...
                </h4>
            </div>
        }
    </div>
);

const mapStateToProps = (state,ownProps)=>({
    /**
     * Find the question in the state that matches the ID provided and pass it to the display component
     */
    ...state.questions.find(({oid})=>oid == ownProps.oid)
});

/**
 * Create and export a connected component
 */
export default connect(mapStateToProps)(QuestionDetailDisplay);