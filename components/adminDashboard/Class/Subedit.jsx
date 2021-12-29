import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';
import { InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import Loader from '../../Loader';
import { Popconfirm, message} from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';
import { UserRemoveIcon } from '@heroicons/react/outline';
import { TrashIcon } from '@heroicons/react/solid';

const { Option } = Select;

export default function Subedit({visible, setVisible, data, subject}) {
    
    const [open, setOpen] = useState(false)
    const router = useRouter();
    const [form, setForm] = useState(
        {
           subjectname : subject?.subjectname,
           teacher : subject?.teacher[0]?._id
        }
    )

    function cancel(e) {
        console.log(e);
        message.error('No biggie');
        setVisible(false);
    }

  const handleDelete = async () => {
       setOpen(true)

       try{

         const res = await axios.delete(`/api/class/subjectt/${subject?._id}`)
         await router.replace(router.asPath);
         await setOpen(false)
         await message.success("Deleted successfully");
         await setVisible(false);

       }catch(error){
           
        console.log(error);
        message.error("unable to update")
       }
    }

    const handleSubmit = async () => {
        
        setOpen(true)

        const config = {
            headers: {
                "Accept" : "application/json",
                'Content-type' : "application/json"
            }
        }
        try {
            const res = await axios.put(`/api/class/subjectt/${subject?._id}`, form, config);

            await router.replace(router.asPath);
            await setOpen(false)
            await message.success("Updated successfully");
            await setVisible(false);

        }catch(error){
            console.log(error);
            message.error("unable to update")
        }
    }

    const Change =(value) => {
        setForm({
            ...form,
            teacher : value
        })
    }

   


    


    const handleChange =(e) => {
        
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

 

  const showDrawer = () => {
     setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

    return (
      <>
        
        <Drawer
          className = " overflow-x-scroll scrollbar-hide"
          title="Update the account"
          width={300}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Popconfirm
                title="Are you sure you want to Edit?"
                onConfirm={handleSubmit}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
               >
                    <Button type="primary">
                        Edit
                    </Button>
               </Popconfirm>
            </Space>
          }
        >

          <Loader open={open} setOpen={setOpen}/>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="subjectname"
                  label="Subject name"
                  initialValue ={form.subjectname}
                  
                >
                  <Input name="subjectname" onChange={handleChange} value={form.subjectname} placeholder="enter subjectname" />
                </Form.Item>
              </Col>
              
              <Col span={12}>
                <Form.Item
                  name="teacher"
                  label="Teacher"
                  
                   
                >
                   <Select name="teacher" onChange={Change} value={form.teacher} placeholder="Please select a teacher">

                     {
                       data?.teachers?.map((t) => (
                           <Option value={t._id}>{t.firstname} {t.lastname}</Option>
                       ))
                     }
                    
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={20}>
              <Col span={20}>
                  <div className="h-full w-full overflow-y-hidden flex justify-end">
                      <Popconfirm
                        title="Are you sure you want to Delete subject?"
                        onConfirm={handleDelete}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                      >
                          <TrashIcon className="h-10 mt-96 w-10 text-green-500 hover:text-red-500 cursor-pointer"/>
                      </Popconfirm>
                    
                  </div>
                 
              </Col>
              
              {/* <Col span={12}>
                
              </Col> */}
            </Row>
            
            
          </Form>
        </Drawer>
      </>
    );
  
}
