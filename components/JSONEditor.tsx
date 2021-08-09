import React from "react";



export default class Editor extends React.Component<any, any> {
    async componentDidMount() {

        const {JSONEditor} = await import('svelte-jsoneditor/dist/jsoneditor');

        const container = document.getElementById("jsoneditor");

        let editor = new JSONEditor({
            target: document.getElementById('jsoneditor'),
            props: {
                json: {
                    greeting: 'Hello World',
                }}
        });
    }
    render() {
        return <>
            <p>Editor</p>
            <div id="jsoneditor" />
        </>

    }
}
