import React, { Component } from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeonSuperclass from '../decorators/accordeonSuperclass'

class ArticleList extends accordeonSuperclass {
    static propTypes = {
        articles: PropTypes.array
    }
    constructor() {
        super()
    }
    render() {
        // const { openArticleId } = this.state;
        const articleElements = this.props.articles.map((article, index) => <li key={article.id}>
            <Article article={article}
                isOpen={this.state.openArticleId === article.id}
                toggleOpen={this.toggleOpen}
            />
        </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default ArticleList
