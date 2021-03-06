import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          type: 'life',
          title: 'Visit doctor',
          subTitle: 'Remember to bring your documents',
          time: '14:43',
          completed: false,
        },
        {
          id: 2,
          type: 'life',
          title: 'Visit pathology lab',
          subTitle: 'Prepare relevant notes',
          time: '16:00',
          completed: true,
        },
        {
          id: 3,
          type: 'work',
          title: 'Attend gym',
          subTitle: 'Wearing sportswear',
          time: '17:20',
          completed: false,
        },
        {
          id: 4,
          type: 'life',
          title: 'Cook food',
          subTitle: 'Go to the supermarket to prepare ingredients',
          time: '19:00',
          completed: false,
        },
        {
          id: 5,
          type: 'entertainment',
          title: 'watching TV',
          subTitle: 'Relax time',
          time: '20:00',
          completed: true,
        },
        {
          id: 6,
          type: 'work',
          title: 'delectus aut autem',
          subTitle: 'quis ut nam facilis et officia qui',
          time: '20:00',
          completed: true,
        },
        {
          id: 7,
          type: 'entertainment',
          title: 'fugiat veniam minus',
          subTitle: 'et porro tempora',
          time: '02:30',
          completed: true,
        },
        {
          id: 8,
          type: 'work',
          title: 'nesciunt totam sit blanditiis sit',
          subTitle: 'laborum aut in quam',
          time: '15:33',
          completed: false,
        },

        {
          id: 9,
          title: 'go to shop',
          type: 'entertainment',
          subTitle: 'quo laboriosam deleniti aut qui',
          time: '17:22',
          completed: true,
        },
        {
          id: 10,
          type: 'work',
          title: 'preview',
          subTitle: 'laborum aut in quam',
          time: '22:30',
          completed: false,
        },
        {
          id: 11,
          type: 'work',
          title: 'arrange',
          subTitle: 'earum doloribus ea doloremque quis',
          time: '20:00',
          completed: true,
        },
        {
          id: 12,
          type: 'entertainment',
          title: 'play',
          subTitle: 'repellendus veritatis molestias',
          time: '14:20',
          completed: true,
        },
        {
          id: 13,
          type: 'entertainment',
          title: 'totam quia non',
          subTitle: 'doloremque quibusdam asperiores',
          time: '16:51',
          completed: false,
        },
        {
          id: 14,
          type: 'entertainment',
          title: 'totam atque quo nesciunt',
          subTitle: 'tempore ut sint quis recusandae',
          time: '19:08',
          completed: true,
        },
        {
          id: 15,
          type: 'life',
          title: 'sit reprehenderit omnis quia',
          subTitle: 'qui labore est occaecati recusandae aliquid',
          time: '23:33',
          completed: false,
        },
      ],
    };
  }
  componentDidMount() {
    this.props.navigation.setParams({
      rightTitle: '???',
      onRight: () => {
        Actions.TodoForm({ handleAddTodo: this.handleAddTodo });
      },
      leftTitle: '?????????\nC108156135',
    });
  }
  handlePress = id => {
    // ????????????????????? id ???????????????????????? state ?????? todos ??????????????????
    // ??????????????????????????????????????????????????????????????? setState ????????????????????????
    const newTodos = this.state.todos.map(todo => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    this.setState({
      todos: newTodos,
    });
  };
  handleAddTodo = todo => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.todos.length + 1,
          time: new Date().getHours() + ':' + new Date().getMinutes(),
          ...todo,
        },
      ],
    });
  };

  render() {
    // ?????? filter ?????????????????????todos?????????????????????????????????????????????????????????????????????????????????
    const unCompletedTodos = this.state.todos.filter(
      todo => todo.completed === false,
    );
    const completedTodos = this.state.todos.filter(
      todo => todo.completed === true,
    );

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.todoTitle}>???????????????</Text>
            <View style={styles.todoItems}>
              {unCompletedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onPress={this.handlePress}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.todoTitle}>???????????????</Text>
            <View style={styles.todoItems}>
              {completedTodos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onPress={this.handlePress}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ??????????????????
    backgroundColor: '#FFF447', // ??????????????????
  },
  todoTitle: {
    color: '#3EB595',
    fontSize: 20, // ??????????????????
    fontWeight: 'bold', // ??????????????????
    padding: 10, // ????????????????????????
  },
  todoItems: {
    marginHorizontal: 10, // TodoItems ?????????????????????????????????
  },
});
