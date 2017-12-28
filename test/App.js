import React from 'react';
import {
  Alert,
  Button,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';

/* サンプルデータ */
const singers = [
  { title: 'Taylor Swift', detail: 'Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. One of the leading contemporary recording artists, she is known for narrative songs about her personal life, which have received widespread media coverage.' },
  { title: 'Ariana Grande', detail: 'Ariana Grande-Butera (born June 26, 1993), better known as Ariana Grande (/ˌɑːriˈɑːnə ˈɡrɑːndeɪ/),[3] is an American singer and actress. She began her career in 2008 in the Broadway musical 13, before playing the role of Cat Valentine in the Nickelodeon television series Victorious, and in the spinoff Sam & Cat until 2014. She has also appeared in other theatre and television roles and has lent her voice to animated television and films.'},
  { title: 'Katy Perry', detail: 'Katheryn Elizabeth Hudson (born October 25, 1984), known professionally as Katy Perry, is an American singer and songwriter. After singing in church during her childhood, she pursued a career in gospel music as a teenager.' },
];

/* スタイル */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    color: 'rgba(14, 13, 13, .38)',
  },
  paragraph: {
    fontSize: 18,
    color: '#737373',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14, 13, 13, .38)',
    marginVertical: 12,
  },
  inputGroup: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    minWidth: 60,
  },
  textInput: {
    flex: 4,
    borderColor: 'rgba(14, 13, 13, .38)',
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 40,
  },
  multiTextInput: {
    flex: 4,
    borderColor: 'rgba(14, 13, 13, .38)',
    borderWidth: 1,
    paddingHorizontal: 9,
    height: 80,
  },
});


/*
 * データのタイトルをリスト表示するコンポーネント
 * ナビゲーターで描画すると引数(props)に`navigation`が渡される
 */
const ListScreen = ({ navigation, screenProps }) => (
  <FlatList
    contentContainerStyle={styles.container}
    data={screenProps.singers}
    keyExtractor={(item, index) => index}
    removeClippedSubviews={false}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.listItem}
        /* タイトルが押されたら詳細画面にナビゲート、`item`を引数として渡している */
        onPress={() => navigation.navigate('Detail', item)}
      >
        <Text style={styles.heading}>{item.title}</Text>
      </TouchableOpacity>
    )}
  />
);

/*
 * データの詳細を表示するコンポーネント
 */
const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
    {/* `navigation.state.params`からリストで渡した`item`の中身が取れる */}
    <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.title}</Text>
    <Text style={styles.paragraph}>{navigation.state.params.detail}</Text>
  </View>
);

DetailScreen.navigationOptions = ({ navigation, screenProps }) => ({
  headerRight: (
    <TouchableOpacity
      style={{ marginRight: 8 }}
      onPress={() => {
        Alert.alert(
          'Warning',
          '項目を削除しますか?',
          [
            {
              text: 'Delete',
              onPress: () => {
                screenProps.removeSingerItem(navigation.state.params.index);
                navigation.goBack();
              },
            },
            { text: 'Cancel' },
          ],
        );
      }}
    >
      <Entypo size={24} name="trash" color={'red'} />
    </TouchableOpacity>
  ),
});

/*
 * StackNavigatorを作成
 * 第一引数は登録する画面(Screen)情報を設定
 * 第二引数はオプション、初期表示画面を設定
 */
const SingersList = StackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: {
      title: 'FamousSinger',
    },
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      title: 'Detail',
    },
  },
}, {
  initialRouteName: 'List',
});


/*
 * 項目追加画面を作成
 */
class AddSingerItemScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '', detail: '' };
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    const { title, detail } = this.state;
    if (!title) return Alert.alert('Error', 'titleは必須です');

    this.props.screenProps.addNewSingerItem({ title, detail });
    Alert.alert(
      'Notice',
      '項目を追加しました!',
      [{ text: 'OK', onPress: () => this.props.navigation.navigate('List') }],
    );
    this.setState({ title: '', detail: '' });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inputGroup}>
            <Text style={[styles.paragraph, styles.label]}>title</Text>
            <TextInput
              blurOnSubmit
              onChangeText={title => this.setState({ title })}
              style={[styles.textInput, styles.heading]}
              value={this.state.title}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={[styles.paragraph, styles.label]}>detail</Text>
            <TextInput
              blurOnSubmit
              multiline
              onChangeText={detail => this.setState({ detail })}
              style={[styles.multiTextInput, styles.paragraph]}
              value={this.state.detail}
            />
          </View>
          <Button color={'#037aff'} onPress={this.handleOnPress} title={'Add item to list'} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


/*
 * TabNavigatorを作成
 * StackNavigatorと基本は同じだが、タブアイコンの設定を行っている
 * 第二引数で画面下タブに表示されるアイコン色とラベル非表示を設定
 */
const Tab = TabNavigator({
  List: {
    screen: SingersList,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Entypo size={24} name="list" color={tintColor} />,
    },
  },
  AddItem: {
    screen: AddSingerItemScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Entypo size={24} name="add-to-list" color={tintColor} />,
    },
  },
}, {
  initialRouteName: 'List',
  tabBarOptions: {
    activeTintColor: '#037aff',
    inactiveTintColor: '#737373',
    showLabel: false,
  },
});


/*
 * リストを保持しているAppコンテナコンポーネント
 */
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singers,
    };
    this.addNewSingerItem = this.addNewSingerItem.bind(this);
    this.removeSingerItem = this.removeSingerItem.bind(this);
  }

  addNewSingerItem({ title, detail }) {
    this.setState({
      singers: [...this.state.singers, { title, detail }],
    });
  }
  
  removeSingerItem(index) {
    this.setState({
      singers: this.state.singers.filter((_, i) => i !== index),
    });
  }

  render() {
    /* screenPropsで各子供にsingersを渡している */
    return (
      <Tab
        screenProps={{
          singers: this.state.singers,
          addNewSingerItem: this.addNewSingerItem,
          removeSingerItem: this.removeSingerItem,
        }}
      />
    );
  }
}