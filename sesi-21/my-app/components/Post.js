import React from "react"
import { Icon, Text, Flex } from "native-base"
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Post({ post, idx, deleteFromState, updateDataModal }) {

    const deletePost = () => {
        fetch(`http://192.168.1.3:4000/posts/${post.id}`, {
            method: 'delete'
        })
            .then(() => deleteFromState(idx))
            .catch(err => console.log(err))
    }

    const updatePost = () => {
        updateDataModal(post.id, idx)
    }

    return (
        <Flex
            bg="white"
            m={2}
            p={3}
            rounded="lg"
            direction="row"
            justify="space-between"
            align="center"
        >
            <Flex>
                <Text fontSize="lg" fontFamily="monospace" bold>{post.title}</Text>
                <Text fontSize="sm">{post.desc}</Text>
            </Flex>
            <Flex direction="row">
                <Icon
                    as={<MaterialCommunityIcons name="update" />}
                    size={5}
                    color="muted.400"
                    onPress={() => updatePost()}
                />
                <Icon
                    as={<AntDesign name="delete" />}
                    size={5}
                    ml="3"
                    color="muted.400"
                    onPress={() => deletePost()}
                />
            </Flex>
        </Flex>
    )
}