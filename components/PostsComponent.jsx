import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native'
import {getPosts} from '../src/api/API'
import PostComponent from './PostComponent'

function PostsComponent({navigation}) {
  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    const posts = await getPosts()
    setPosts([...posts])

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostComponent item={item} nav={navigation} />}
        keyExtractor={item => '' + item.id}
      />

    </View>
  );
}

export default PostsComponent;