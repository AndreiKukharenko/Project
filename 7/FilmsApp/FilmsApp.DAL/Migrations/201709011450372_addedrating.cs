namespace FilmsApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedrating : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Films", "Rating", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Films", "Rating");
        }
    }
}
