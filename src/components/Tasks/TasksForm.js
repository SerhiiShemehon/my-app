import React, {useState} from 'react'
import {Form, Input} from 'components/Form';

const TasksForm = ({addedTasks}) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value = '';
    addedTasks(title)
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }
  return (
    <div className={'task-form'}>
      <Form handleSubmit={handleSubmit}>
        <Input handleChange={handleChange} placeholder={'Type here...'} name={'title'} />
        <button type={'submit'}>submit</button>
      </Form>
    </div>
  )
}

export default TasksForm;
