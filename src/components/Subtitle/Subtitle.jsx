import {Component} from "react";
import './Subtitle.css';


class Subtitle extends Component{

    letterActive(e){
        const t = e.target;
        if(t.classList.contains('word-top') ||
            t.classList.contains('word-bottom'))
        {
            t.parentNode.classList.add('word-active');
            setTimeout(() =>
            {
                t.parentNode.classList.remove('word-active');
            }, 2000);
        }
    }

    render() {

        const wordArray = this.props.text.split(' ').map(w => <div className={"word"}>
            <div className="word-top">{w}</div>
            <div className="word-bottom">{w}</div>
        </div>)


        return (
            <sub className={"subtitle"} onMouseOver={this.letterActive}>
                {wordArray}
            </sub>
        );
    }
}

export default Subtitle;