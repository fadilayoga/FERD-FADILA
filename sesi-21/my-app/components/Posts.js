import React, { useState, useEffect } from "react"
import { Keyboard } from "react-native";
import { View, Input, Fab, ScrollView, Icon, Modal, FormControl, Button, useToast } from "native-base"
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Post from './Post'

export default function Posts() {
    const [items, setItems] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [modalKey, setModalKey] = useState('')
    const [modalIndex, setModalIndex] = useState('')
    const [modalTitle, setModalTitle] = useState('')
    const [modalDesc, setModalDesc] = useState('')
    const toast = useToast()

    const upTitle = (text) => {
        setTitle(text)
    }

    const upDesc = (text) => {
        setDesc(text)
    }

    const deleteFromState = (idx) => {
        let data = [...items]
        data.splice(idx, 1)
        setItems(data)
    }

    const updateDataModal = (id, idx) => {
        setModalKey(id)
        setModalIndex(idx)
        setModalTitle(items[idx].title)
        setModalDesc(items[idx].desc)
        setShowModal(true)
    }

    const updateFromState = () => {
        let data = [...items]
        data[modalIndex].title = modalTitle
        data[modalIndex].desc = modalDesc
        setItems(data)
    }

    const updateDataJson = () => {
        if (modalTitle == null || modalTitle.trim() === '') {
            toast.show({
                description: "Title can't be empty"
            })
        } else if (modalDesc == null || modalDesc.trim() === '') {
            toast.show({
                description: "Description can't be empty"
            })
        } else {
            fetch(`http://192.168.1.3:4000/posts/${modalKey}`, {
                method: 'put',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ id: `${modalKey}`, title: `${modalTitle}`, desc: `${modalDesc}` })
            })
                .then(() => updateFromState())
                .catch(err => console.log(err))
            setShowModal(false)
        }
    }


    const addData = () => {
        if (title == null || title.trim() === '') {
            toast.show({
                description: "Title can't be empty"
            })
        } else if (desc == null || desc.trim() === '') {
            toast.show({
                description: "Description can't be empty"
            })
        } else {
            fetch('http://192.168.1.3:4000/posts', {
                method: 'POST',
                headers: { "Content-type": "application/json; charset=UTF-8" },
                body: JSON.stringify({ id: `${items.length + 1}`, title, desc })
            })
                .then(res => res.json())
                .then(data => setItems([...items, data]))
                .catch(err => console.log(err))
            setTitle('')
            setDesc('')
        }
        Keyboard.dismiss();
    }

    useEffect(() => {
        fetch('http://192.168.1.3:4000/posts')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <View bg="#7C9473" flex={1}>
            <Input
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="title" size={24} color="black" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                variant="filled"
                m={2}
                my={1}
                size="lg"
                placeholder="Title"
                value={title}
                onChangeText={text => upTitle(text)} />
            <Input
                InputLeftElement={
                    <Icon
                        as={<MaterialIcons name="description" size={24} color="black" />}
                        size={5}
                        ml="2"
                        color="muted.400"
                    />
                }
                variant="filled"
                m={2}
                my={1}
                mb={2}
                size="lg"
                placeholder="Description"
                value={desc}
                onChangeText={text => upDesc(text)} />
            <ScrollView>
                {items.map((item, index) => (
                    <Post
                        key={item.id}
                        post={item}
                        idx={index}
                        deleteFromState={deleteFromState}
                        updateDataModal={updateDataModal}
                    />
                ))}
            </ScrollView>
            <Fab
                position="absolute"
                size="sm"
                right={10}
                bottom={12}
                icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
                bg="warning.300"
                onPress={() => addData()}
            />
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header>{modalIndex === '' ? `Update` : `Update ${items[modalIndex].title}`}</Modal.Header>
                    <Modal.Body>
                        <FormControl>
                            <FormControl.Label>Title</FormControl.Label>
                            <Input
                                value={modalTitle}
                                onChangeText={text => setModalTitle(text)} />
                        </FormControl>
                        <FormControl mt="3">
                            <FormControl.Label>Description</FormControl.Label>
                            <Input
                                value={modalDesc}
                                onChangeText={text => setModalDesc(text)} />
                        </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                variant="ghost"
                                colorScheme="blueGray"
                                onPress={() => {
                                    setShowModal(false)
                                }}
                            >
                                Cancel
                            </Button>
                            <Button
                                onPress={() => {
                                    updateDataJson()
                                }}
                            >
                                Save
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </View>
    )
}