function EditProfile() {
    return (
        <>
            <h1 className="text-2xl font-semibold">Edit Profile</h1>
            <form className="space-y-4">
                <div className="space-y-2">
                    <label className="block text-lg" htmlFor="firstName">First Name</label>
                    <input className="w-full px-4 py-2 border rounded-md" type="text" id="firstName" name="firstName" />
                </div>
                <div className="space-y-2">
                    <label className="block text-lg" htmlFor="lastName">Last Name</label>
                    <input className="w-full px-4 py-2 border rounded-md" type="text" id="lastName" name="lastName" />
                </div>
                <div className="space-y-2">
                    <label className="block text-lg" htmlFor="firstName">Role</label>
                    <input className="w-full px-4 py-2 border rounded-md" type="text" id="firstName" name="firstName" />
                </div>
                <div className="space-y-2">
                    <label className="block text-lg" htmlFor="email">Email</label>
                    <input className="w-full px-4 py-2 border rounded-md" type="email" id="email" name="email" />
                </div>
                <div className="space-y-2">
                    <label className="block text-lg" htmlFor="bio">Bio</label>
                    <textarea className="w-full px-4 py-2 border rounded-md" id="bio" name="bio" rows="4"></textarea>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Save Changes</button>
            </form>
            
            
        </>
    )
}

export default EditProfile
