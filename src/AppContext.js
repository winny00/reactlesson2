import React from 'react';

export const Context = React.createContext();
// Provider Consumer 配对使用
export const Provider = Context.Provider;// 提供者
export const Consumer = Context.Consumer;// 消费者

export const handleComsumer = Cmp => (props) => {
        return <Consumer>
            {ctx => <Cmp {...ctx} {...props} />}
        </Consumer>
    }