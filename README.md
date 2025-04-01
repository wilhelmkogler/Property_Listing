<body> 
    <h1>🏠 Property Listing Website  </h1>  
    <img src="img/git1.JPG" alt="img_homepage"> 
    <p align="justify">This user-friendly inventory management software made for handling football jerseys includes a main window and three extra sections where you can manage jersey details, keep track of stock in different warehouses, and store warehouse info like location and capacity. You can easily import or export data to save time. The app also gives you useful stats, like the total value of jerseys, how full each warehouse is, and which jersey is the most valuable.</p>
    <h2>Features</h2>
    <ul>
        <li>Login interface</li>
        <li>Product, inventory, and warehouse windows</li>
        <li>Add new record</li>
        <li>Edit existing record</li>
        <li>Sort by column values</li>
        <li>Import data from external file</li>
        <li>Export data to external file</li>
        <li>Delete existing record</li>
        <li>Display total value of jerseys</li>
        <li>Show details of the most valuable jersey</li>
        <li>Display information about a user-selected warehouse</li>
    </ul>
    <h2>Tech Stack</h2>  
    <p>Front-End: Tkinter </p>   
    <p>Back-End: Python </p>   
    <p>Database: SQLite </p>  
    <h2>Login Interface</h2> 
    <img src="img/elso.png" alt="" srcset="">    
    <p align="justify">When the software is launched, it first opens with a login interface as the main window. The system allows access using a predefined username and password. The login form includes validation, so if any field is left empty, an error message is displayed. Similarly, if either field contains incorrect data, the system notifies the user with an appropriate error message.  
    </p>
    <h2>Main Window</h2>  
    <img src="img/masodik.png" alt="" srcset="">    
    <p align="justify">After a successful login, the main window becomes accessible, and the user can open the three table windows (inventory, warehouse, and product) from the top menu. Once data has been successfully added or imported, reporting windows also become available: Report 1, Report 2, and Report 3. However, if any of the tables are empty, attempting to access the reports will result in an error message.</p>
    <h2>Sub Windows</h2>
    <img src="img/4.JPG" alt="" srcset="">
    <p align="justify">The three windows used for data management each contain tables to ensure clear, organized storage and easy usage.</p>
    <h2>Table Features</h2>
    <img src="img/6.JPG" alt="" srcset="">  
    <p align="justify">These tables are accompanied by various buttons that allow users to create new records, edit existing ones, or delete them. It is also possible to import and export records from and to external files—specifically in .csv format. Additionally, the data in each table can be sorted in ascending or descending order based on the column values.</p>
    <h2>Report 1 & 2</h2>
    <img src="img/7.JPG" alt="" srcset=""> 
    <p align="justify">Once records have been stored, reporting windows become available. The first report displays the total value of all records in the product table, showing the overall worth of all jerseys. The second report presents the details of the most valuable item in stock, identifying which jersey holds the highest value and providing information about it.</p>
    <h2>Report 3</h2>
    <img src="img/8.JPG" alt="" srcset="">
    <p align="justify">The third and final report is user-driven, as it displays information based on the warehouse selected by the user. After choosing a specific warehouse, the user is presented with detailed data about it, including its location, total capacity, current stock level, and the percentage of space currently used. This utilization rate is also visualized with a bar chart, making it easy to understand how full the warehouse is at a glance.</p>

    
    
    
