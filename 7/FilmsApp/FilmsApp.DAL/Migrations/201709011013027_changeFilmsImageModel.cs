namespace FilmsApp.DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class changeFilmsImageModel : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.FilmsImages", "ImageUrl", c => c.String());
            AddColumn("dbo.FilmsImages", "RelatedFilm_Id", c => c.Int());
            CreateIndex("dbo.FilmsImages", "RelatedFilm_Id");
            AddForeignKey("dbo.FilmsImages", "RelatedFilm_Id", "dbo.Films", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.FilmsImages", "RelatedFilm_Id", "dbo.Films");
            DropIndex("dbo.FilmsImages", new[] { "RelatedFilm_Id" });
            DropColumn("dbo.FilmsImages", "RelatedFilm_Id");
            DropColumn("dbo.FilmsImages", "ImageUrl");
        }
    }
}
