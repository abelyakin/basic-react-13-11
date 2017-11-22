import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeonBehavior from '../decorators/accordeonBehavior'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array
    }

    render() {
        const { openArticleId, toggleOpen } = this.props;
        const articleElements = this.props.articles.map((article, index) => <li key={article.id}>
            <Article article={article}
                isOpen={openArticleId === article.id}
                toggleOpen={toggleOpen}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default accordeonBehavior(ArticleList)