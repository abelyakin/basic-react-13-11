//HOC === Higher Order Component === decorator
import React from 'react'

export default (OriginalComponent) => class DecoratedComponent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            openArticleId: null
        }
    }

    toggleOpen = (openArticleId) => this.setState({
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    });

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen={this.toggleOpen} />
    }
}