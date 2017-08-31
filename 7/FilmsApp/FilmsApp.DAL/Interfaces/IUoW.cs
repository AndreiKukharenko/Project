using System;
using FilmsApp.DAL.Repositories;

namespace FilmsApp.DAL.Interfaces
{
    public interface IUoW : IDisposable
    {
        FilmsRepository FilmsRepository { get; }

        //CommentsRepository CommentsRepository { get; }

        //FilmsImagesRepository FilmsImagesrepository { get; }
        void Save();
    }
}
