import React from 'react';

let ready = false, 
    launchStarted = false;

const launchQueue = [];

/**
 * Higher order function that returns a component that waits for a ExtReact to be ready before rendering.
 * @param {class} Component 
 * @return {class}
 */
export default function renderWhenReady(Component) {
    return class extends React.Component {
        state = {
            ready
        }

        componentWillMount() {
            if (!this.state.ready) {
                queueRender(this);
            }
        }

        render() {
            return this.state.ready && (
                <Component {...this.props}/>
            );
        }
    }
}

/**
 * Queues a component to be rendered once ExtReact is ready. 
 * @param {React.Component} component A React component wrapped with withExtReact
 */
function queueRender(component) {
    launchQueue.push(component);

    if (!launchStarted) {
        launchStarted = true;

        Ext.onReady(() => {
            for (let queued of launchQueue) {
                queued.setState({ ready: true });
            }
            ready = true;
        })
    }
}