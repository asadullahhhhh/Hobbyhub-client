import React, { use } from 'react';
import { AuthContext } from '../../assets/Contexts/Context';
import Swal from 'sweetalert2';

const CreateGrp = () => {

    const {user} = use(AuthContext)
    // console.log(user?.groupCollection);
    const userID = user?._id 

    const categories = [
      "Drawing & Painting",
      "Photography",
      "Video Gaming",
      "Fishing",
      "Running",
      "Cooking",
      "Reading",
      "Writing",
    ];

    // form submit function here                             
    const handelSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries())

        // console.log(data);

        // Data add in dataBase function here
        fetch("http://localhost:3000/groups", {
            method : 'POST',
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                  user?.groupCollection.push(data.insertedId)
                  fetch(`http://localhost:3000/users/${userID}`, {
                    method: "PUT",
                    headers: {
                      "content-type": "application/json",
                    },
                    body: JSON.stringify(user),
                  })
                    .then(res => res.json())
                    .then(data => {
                      if(data.modifiedCount){
                        Swal.fire({
                          position: "center",
                          icon: "success",
                          title: "Group create successfully",
                          showConfirmButton: false,
                          timer: 1500,
                        });
                        form.reset();
                      }
                    })
                }
            })
    }

    return (
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl my-[50px]">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Create a Hobby Group
            </h2>
            <form onSubmit={handelSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Group Name</label>
                <input
                  type="text"
                  name="groupName"
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Hobby Category</label>
                <select
                  name="hobbyCategory"
                  required
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Select Category</option>
                  {categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                  name="description"
                  required
                  className="w-full p-2 border rounded-md"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label className="block mb-1 font-medium">
                  Meeting Location
                </label>
                <input
                  type="text"
                  name="meetingLocation"
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">Max Members</label>
                  <input
                    type="number"
                    name="maxMembers"
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium">Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  required
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">User Name</label>
                  <input
                    type="text"
                    name="userName"
                    defaultValue={user?.name}
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">User Email</label>
                  <input
                    type="email"
                    name="userEmail"
                    defaultValue={user?.email}
                    readOnly
                    className="w-full p-2 border rounded-md bg-gray-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};

export default CreateGrp;