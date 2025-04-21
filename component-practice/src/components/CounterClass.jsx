import { Component } from "react";

class CounterClass extends Component {

    // 생성자 정의.
    constructor(props) {    // props : 부모 컴포넌트로부터 전달된 데이터를 담은 객체
        super(props);       // 부모 클래스(Component)의 생성자를 호출
        this.state = { count: 0 };
        // => state 필드에 객체를 초기화. (state는 상태를 관리하는 객체)
    }

    handlerClick = () => {
        // 상태를 변경 (업데이트) --> setState 메소드 사용 => 해당 키값이 없으면 생성하여 setState메소드를 동작함
        this.setState({ count: this.state.count + 1 });
    }

    // * 생명 주기

    // - 처음 렌더링 된 시정
    componentDidMount() {
        console.log("componentDidMount::::");
    }

    // - 상태가 변경되었을 때
    componentDidUpdate() {
        console.log("componentDidUpdate");
        // console.log(this.state);
    }

    // - 해당 컴포넌트가 사라질 때
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div>
                <h2>클래스형 컴포넌트</h2>
                <p>Count : {this.state.count}</p>
                <button onClick={this.handlerClick}>+</button>
            </div>
        );
    }

}

export default CounterClass;