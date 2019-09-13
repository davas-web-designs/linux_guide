## class notes 13.9.2019:

1. All the sys calls, return a -1 or a 0, but the os returns a -n , being n an extrange number, this is managed by the os
2. the /proc is called a false filesystem, because what is there is generated in runtime.  
All of the files in /proc have at least 2 functions assigned. In /proc there are 2 functions that work as read and write. 
/proc appeared to give information about the system diagnosis, originally only about preccesses, but actually it has more use to it.  
Using the file_operations interface, we can modify the behaviour by altering the pointers.  
3. creating a new /proc entry
create a kernel module with its functions  
define a struct file_operations to change its behaviour. The functions need to have the same parameters as in the interface.  
we have to use proc_dir_entry *proc_create(name, 666, null, &file_operations name_of_pointer) this has to be invoked in init_module  
as well, remove_proc_entry has to be called when the module gets unmounted

cat -> executres open(), read() in a loop. There has to be a 0 in order to shut it.  
echo -> executes open(), write(fd, "hola\n", 5);

Dont forgive to update the offset in the function read_proc_proto.

4. Pointers to the user space.  
   Be careful and treat the problems that come with them.  
   - declare array char kbuf[MAX_CHARS]
   - use copy_to_user when read()
   - use copy_from_user when write()
   
5. linked lists
   incorporate the next and prev in the structure.  
   struct list_head
   
### Assignment 1:

1. objectives:
   - familiarize with modules in kernel and /proc
   - debugging with Ftrace

2. exercises (to prepare the assignment):
   - these dont need to be handed in
   - exercise number 5. Study module 'clipboard', important. copy paste.
   - load this kernel module
   - create the /proc/clipoard
   - play with clipboard with echo/cat
   - undestund what it does
   - undestund how it is done.
   
3. Introduction to Ftrace.
   - detect when the kernel executes a certain function and then print a message.
   
4. Assignment:
   - Create a kernel module that implements a linked list of integers.
   - create an entry /proc/modlist
   - the memory has to be dynamically allocated 
   - free the memory when the module gets unmounted.
   - parse with sscanf()
   - 
   
   
