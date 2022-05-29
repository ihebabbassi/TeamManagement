using Microsoft.EntityFrameworkCore.Migrations;

namespace TeamManagement.Migrations
{
    public partial class fixreltnship : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Users_id",
                table: "Requests");

            migrationBuilder.DropIndex(
                name: "IX_Requests_id",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "id",
                table: "Requests");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Requests",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Requests_UserId",
                table: "Requests",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Users_UserId",
                table: "Requests",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Requests_Users_UserId",
                table: "Requests");

            migrationBuilder.DropIndex(
                name: "IX_Requests_UserId",
                table: "Requests");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Requests");

            migrationBuilder.AddColumn<int>(
                name: "id",
                table: "Requests",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Requests_id",
                table: "Requests",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_Requests_Users_id",
                table: "Requests",
                column: "id",
                principalTable: "Users",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
