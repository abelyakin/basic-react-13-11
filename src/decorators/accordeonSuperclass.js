import React from 'react'

export default class AccordeonSuperclass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            openArticleId: null
        }
    }

    toggleOpen = (openArticleId) => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    });

}