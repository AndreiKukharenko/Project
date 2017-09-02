namespace FilmsApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeModels : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.AspNetUsers", "Login");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "Login", c => c.String());
        }
    }
}
